import styled, { css } from 'styled-components'
import { ButtonProps } from './Button'

const getBtnFormat = (btnFormat) => {
  let styledProps = ``;
  switch(btnFormat) {
    case 'inverse': 
      styledProps = `
        background: #414141;
        color: #f9ca02;
      `
    break;
    case 'alt':
      styledProps = `
        background: #f5490c;
        color: #fff;
      `
    break;
    case 'icon':
      styledProps = `
        border-radius: 100%;
        height: 45px;
        width: 45px;
        overflow: hidden;
        padding: 0;
      `
    break;
    case 'default':
    default:
      return false;
  }
  return styledProps;
}

const CSSButton = css<ButtonProps>`
  background: #f9ca02;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  height: 40px;
  padding: 10px 32px;
  width: 175px;
  transition: 0.25s;

  ${({ disabled }) => disabled && (`
    cursor: not-allowed;
    opacity: .65;
  `)}

  ${({ btnFormat }) => getBtnFormat(btnFormat)}

`

export const StyledButton = styled.button<ButtonProps>`
  ${CSSButton}
`