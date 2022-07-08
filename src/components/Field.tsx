interface FieldProps {
  label: string,
  children: JSX.Element
}

const Field = ({ label, children }: FieldProps) : JSX.Element => {
  const id = children.props.id;
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={ id } className="sm:font-semibold self-start">{ label }</label>
      { children }
    </div>
  )
}
export default Field;
