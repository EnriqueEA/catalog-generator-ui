import { Route, Routes } from "react-router-dom";
import Catalogo from "./views/Catalogo/index";
import NotFound from "./views/NotFound/NotFound";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={ <Catalogo /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
