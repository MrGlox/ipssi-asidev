import styled from "styled-components";
import { layout, space } from "styled-system";

const StyledContainer = styled.div`
  display: flex;
  padding: 0 24px;
  margin: 0 auto;
  max-width: 1080px;

  ${layout}
  ${space}
`;

export default StyledContainer;
