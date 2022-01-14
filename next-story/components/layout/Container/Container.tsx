import React from "react";
import StyledContainer from "./Container.styled";

interface ContainerProps {
  /**
   * Styled system feature to edit the html tag
   */
  as?: string;
  /**
   * Container contents
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
export const Container = ({ as, children, ...props }: ContainerProps) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};
