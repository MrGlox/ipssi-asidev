import React from "react";
import StyledBox from "./Box.styled";

interface BoxProps {
  /**
   * Styled system feature to edit the html tag
   */
  as?: string;
  /**
   * Box contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Box = ({ as, children, ...props }: BoxProps) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};
