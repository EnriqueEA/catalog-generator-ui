import ProductList from "../../components/ProductList";

const Catalogo = (): JSX.Element => {
   // const [progress, setProgress] = useState(0);

   // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
   //    const uploadTask = uploadFileResumable(e.target.files![0]);
   //    uploadTask.on('state_changed',
   //       snapshot => {
   //          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   //          console.log('Upload is ' + progress + '% done');
   //          setProgress(progress);
   //       }
   //    );
   // }

   return (
      <>
         {/* <div className="border-b">
            <h1 className="font-semibold">Productos</h1>
         </div> */}
         <ProductList />
      </>
  )
}

export default Catalogo;