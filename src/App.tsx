import { Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import Catalogo from "./views/Catalogo/index";
import NotFound from "./views/NotFound/NotFound";
import ProductAdd from "./views/ProductAdd";
import ProductView from "./views/ProductView";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={ <></> } />
      <Route path="/products" element={ <PublicRoute><Catalogo /></PublicRoute> } />
      <Route path="/product/add" element={ <PublicRoute><ProductAdd /></PublicRoute> } />
      <Route path="/product/:id" element={ <ProductView /> } />
      <Route path="*" element={ <PublicRoute><NotFound /></PublicRoute> } />
    </Routes>
  );
}

export default App;
