import { useCallback, useRef, useState } from "react";
import { getDownloadURL } from "firebase/storage";
import { uploadFileResumable } from "../../firebase/storage";
import { createCollection } from "../../firebase/firestore";
import { Button, Input } from "../../styledComponents/index";
import { Product } from "../../interfaces/index";
import { useForm } from "../../hooks/useForm";
import Field from "../../components/Field";

const initialState: number[] = [];
const initialRefUrl: string[] = [];

const ProductAdd = () => {
  const [progress, setProgress] = useState(initialState);
  const imagesUrl = useRef(initialRefUrl);
  const { form, onChange } = useForm({
    productName: "",
    wholesalePrice: 0,
    retailPrice: 0,
    brand: "",
    files: {} as FileList
  });

  const { productName, wholesalePrice, retailPrice, brand, files } = form;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id.includes("files")) {
      onChange(e.target.files, "files");
      return;
    }
    onChange(e.target.value, e.target.id);
  }, [onChange]);

  const cleanState = () => {
    const values = Object.values(form);
    let type;
    Object.keys(form).forEach((v, i) => {
      type = typeof values[i];
      const value = type === "string" ? '' : type === "number" ? 0 : type === "object" ? {} as FileList : null;
      onChange(value, v);
    });
    setProgress([]);
    imagesUrl.current = [];
  }

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    Object.values(files).forEach((file, i) => {
      const uploadTask = uploadFileResumable(file, "productos");
      uploadTask.on('state_changed',
        snap => {
          setProgress(prevState => {
            const transferred = snap.bytesTransferred / snap.totalBytes * 100;
            prevState[i] = transferred ? transferred : 0;
            return prevState;
          });
        },
        console.log,
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          imagesUrl.current = [ ...imagesUrl.current, url ];

          if (imagesUrl.current.length === files.length && progress.every(p => p === 100)) {
            createCollection<Product>("productos", {
              nombre: productName,
              precioPorMayor: wholesalePrice,
              precioPorMenor: retailPrice,
              marca: brand,
              imageUrl: imagesUrl.current
            } as Product);
          }
        }
      );
    });
    cleanState();
  };

  return (
    <div className="mt-4 shadow-lg bg-white rounded w-11/12 mx-auto p-4">
      <h1 className="mb-2 font-bold text-2xl sm:text-4xl tracking-tight">Agregar Producto</h1>
      <div className="flex flex-col gap-2">
        <Field label="Producto">
          <Input type="text" id="productName" value={ productName } onChange={ handleChange } />
        </Field>

        <Field label="Precio Público">
          <Input type="number" min="0" id="retailPrice" value={ retailPrice } onChange={ handleChange } />
        </Field>

        <Field label="Precio por Mayor">
          <Input type="number" min="0" id="wholesalePrice" value={ wholesalePrice } onChange={ handleChange } />
        </Field>

        <Field label="Marca">
          <Input type="text" id="brand" value={ brand } onChange={ handleChange } />
        </Field>

        <Field label="Imagenes del Producto">
          <Input type="file" id="files" multiple onChange={ handleChange } />
        </Field>

        <Button $primary className="self-start" onClick={ handleClick }>Agregar Producto</Button>
        <Button $primary className="self-start" onClick={ cleanState }>Limpiar</Button>
      </div>
    </div>
  )
}

export default ProductAdd;