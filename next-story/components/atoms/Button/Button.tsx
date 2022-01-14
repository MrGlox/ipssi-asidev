import React from "react";
import StyledButton from "./Button.styled";

interface ButtonProps {
  as?: string;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <StyledButton type="button" {...props}>
      {label}
    </StyledButton>
  );
};
