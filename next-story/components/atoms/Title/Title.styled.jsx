import styled, { css } from "styled-components";
import { space } from "styled-system";

const StyledTitle = styled.p`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: black;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 48px;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 32px;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 24px;
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 18px;
    `}

  ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 16px;
    `}

  ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 14px;
    `}


  ${space}
`;

export default StyledTitle;
