import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCollection } from "../../firebase/firestore";
import { Product } from "../../interfaces";

const ProductView = () => {
   // const [product, setProduct] = useState();
   const { id } = useParams();

   useEffect(() => {
     (async function() {
      const product = await getCollection<Product>(`productos/${ id }`);
      console.log(product);
     })();
   }, [id])

   return (
      <div>

      </div>
   )
}

export default ProductView;