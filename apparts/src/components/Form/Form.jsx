const Form = ({ handleChange, value }) => (
  <>
    <input onChange={handleChange} defaultValue={value} type="text" />
    <p>{value}</p>
  </>
);

export default Form;
