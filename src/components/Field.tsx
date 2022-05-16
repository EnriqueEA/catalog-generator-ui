interface FieldProps {
  id: string
  label: string,
  children: JSX.Element
}

const Field = ({ id, label, children }: FieldProps) : JSX.Element => {
  return (
    <div>
      <label htmlFor={ id }> { label } </label>
      { children }
    </div>
  )
}
export default Field;
