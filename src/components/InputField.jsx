
// eslint-disable-next-line react/prop-types
const InputField = ({type, value, onChange}) => {
  return (
    <>
    <input type={type} value={value} onChange={onChange} />
    </>
  )
}

export default InputField;