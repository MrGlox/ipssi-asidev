import React from "react";
import StyledText from "./Text.styled";

interface TextProps {
  /**
   * Styled system feature to edit the html tag
   */
  as?: string;
  /**
   * Text contents
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
export const Text = ({ as, children, ...props }: TextProps) => {
  return <StyledText {...props}>{children}</StyledText>;
};
