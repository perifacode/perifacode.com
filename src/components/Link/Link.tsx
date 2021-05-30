import React, { ReactNode } from 'react';
import { StyledGatsby, StyledLink } from './Link.style';

export type LinkProps = {
  children?: ReactNode
  href?: string
  to?: string
  title?: string
}

const getLinkByAttr = (href, to, children, alt) => (
  href ? 
    (
      <StyledLink href={href} title={alt}>{children}</StyledLink>
    ) :
    (
      <StyledGatsby to={to} title={alt}>{children}</StyledGatsby>
    )
  )

export const Link = ({ children, href, to, title }: LinkProps) => {

  return (
    <>
      { getLinkByAttr(href, to, children, title) }
    </>
  )
};
