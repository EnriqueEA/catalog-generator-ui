import { useCallback, useEffect, useState } from "react";

const initialState: JSX.Element[] = [];

const Catalogo = (): JSX.Element => {
   const [body, setBody] = useState(initialState);

   const getData = useCallback(async () => {
      const data = await fetch('https://catalogo-motopartsbikers-default-rtdb.firebaseio.com/users.json');
      console.log(await data.json());
   }, [])

   useEffect(() => {
      getData();
   }, [getData])

  return (
    <div>Catalogo</div>
  )
}

export default Catalogo;