import styled from "styled-components";
import { space } from "styled-system";

const StyledLink = styled.a`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: black;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${space}
`;

export default StyledLink;
