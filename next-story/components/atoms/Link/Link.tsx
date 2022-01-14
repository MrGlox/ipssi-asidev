import React from "react";
import StyledLink from "./Link.styled";

import NextLink, { LinkProps } from "next/link";

interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Styled system feature to edit the html tag
   */
  as?: string;
  /**
   * Link contents
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
export const Link = ({
  as,
  children,
  ...props
}: LinkProps & CustomLinkProps) => {
  return (
    <NextLink passHref {...props}>
      <StyledLink as={as}>{children}</StyledLink>
    </NextLink>
  );
};
