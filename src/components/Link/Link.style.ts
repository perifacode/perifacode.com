import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { LinkProps } from './Link'

const CSSLink = css<LinkProps>`
  text-decoration: none;
  font-family: 'Montserrat';
  position: relative;
  transition: all .3s ease;
  padding: 2px 4px;

  &:hover {
    color: #f9ca02;
    ::before {
      transform: scaleX(1);
      transform-origin: bottom right;
      
    }
  }

  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    inset: 0 0 0 0;
    background: #414141;
    z-index: -1;
    transition: all .3s ease;
    transform: scaleX(0);
    transform-origin: bottom left;
  }
`

export const StyledGatsby = styled(Link)<LinkProps>`
  ${CSSLink}
`

export const StyledLink = styled.a<LinkProps>`
  ${CSSLink}
`