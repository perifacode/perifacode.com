import React, { ReactNode } from 'react';
import { StyledButton } from './Button.style';

type ButtonType = 'button' | 'reset' | 'submit'
type ButtonFormat = 'default' | 'inverse' | 'alt' | 'icon'

export type ButtonProps = {
  children: ReactNode
  btnFormat?: ButtonFormat
  disabled?: boolean
  type: ButtonType
  icon?: ReactNode
  onHover: () => void
  onClick: () => void
}

export const Button = ({ children, btnFormat = 'default', disabled, type, icon, onHover, onClick }: ButtonProps) => (
  <StyledButton
    type={type}
    btnFormat={btnFormat}
    disabled={disabled}
    onHover={onHover}
    onClick={onClick}  
    className="Button"
  >
    {btnFormat === 'icon' ? icon : children}
  </StyledButton>
);
