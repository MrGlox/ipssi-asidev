import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  label {
    margin-bottom: 16px;
  }
`;

const Form = ({ ...rest }) => (
  <StyledForm {...rest}>
    <label htmlFor="name">Ajout todo</label>
    <input id="name" name="name" type="text" />
  </StyledForm>
);

export default Form;
