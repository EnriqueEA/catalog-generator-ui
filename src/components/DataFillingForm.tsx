import Field from "./Field";

const DataFillingForm = () : JSX.Element => {
  return (
    <div className="bg-red-300 flex flex-col gap-2">
      <Field id="name" label="Nombre">
        <input type="text" className="form-control" id="name"/>
      </Field>
    </div>
  )
}
export default DataFillingForm;
