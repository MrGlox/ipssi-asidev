const Form = ({ handleChange, handleClear, value }) => (
  <>
    <input onChange={handleChange} value={value} type="text" />
    <p>{value}</p>
    <button onClick={handleClear}>clear</button>
  </>
);

export default Form;
