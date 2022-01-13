import styled, { css } from "styled-components";

const StyledItem = styled.li`
  ${({ complete }) =>
    complete &&
    css`
      text-decoration: line-through;
    `}
`;

export default StyledItem;
