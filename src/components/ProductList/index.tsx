import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCollections } from "../../firebase/firestore";
import { Product } from "../../interfaces";

const initialState: JSX.Element[] = [];

const ProductList = () => {
   const [products, setProducts] = useState(initialState);

   useEffect(() => {
      (async function() {
         const productsJson: Product[] = await getCollections<Product>("productos");
         console.log(productsJson);
         setProducts(
            Object.values(productsJson).map(product => (
               <div key={product.id} className="relative">
                  <div className="w-full min-h-80 bg-gray-200 rounded-md overflow-hidden lg:h-80">
                     <img
                        src={ product.imageUrl[0] }
                        alt={ product.nombre }
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                     />
                  </div>
                  <div className="mt-4 flex justify-between">
                     <div>
                        <h3 className="text-sm text-gray-700">
                        <Link to={ `product/${ product.id }` }>
                           <span aria-hidden="true" className="absolute inset-0" />
                           { product.nombre }
                        </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Por mayor: S/.{ product.precioPorMayor }</p>
                     </div>
                     <p className="text-sm font-medium">Precio: S/.{ product.precioPorMenor }</p>
                  </div>
               </div>
            ))
         );
      })();
   }, []);

  return (
   <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="font-extrabold tracking-tight">Productos </h1>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
         { products }
      </div>
   </div>
  )
}

export default ProductList;