import DataFillingForm from "./components/DataFillingForm";
import PDFViwer from "./components/PDFViwer";

function App() {
  return (
    <div className="w-11/12 mt-4 mx-auto border border-black rounded-lg p-4">
      <h1 className="text-3xl font-semibold">Catálogo</h1>
      <div className="grid grid-cols-2 mt-4">
        
        <DataFillingForm />
        
        <PDFViwer />
        
      </div>
    </div>
  );
}

export default App;
