import React, { ReactNode } from 'react';
import {
  StyledParagraph,
  StyledSpan,
  StyledLegend,
  StyledLabel
} from './Text.style';

type TextType = 'p' | 'span' | 'legend' | 'label'
export type TextProps = {
  color?: string
  weight?: string
  decoration?: string
  transform?: string
  size?: number
  children?: ReactNode
  lineHeight?: number
  type?: TextType
}

const getTextTag = ({ 
  children,
  size, 
  transform, 
  decoration, 
  weight, 
  color, 
  type, 
  lineHeight, 
  ...rest }: TextProps) => {
    let comp = <></>
    
    switch(type) {
      case 'p':
        comp = <StyledParagraph
          className={`Text`}
          {...rest}
          size={size}
          transform={transform}
          decoration={decoration}
          weight={weight}
          color={color}
          lineHeight={lineHeight}
          data-testid="Text"
        >
          {children}
        </StyledParagraph>
      break;
      case 'legend':
        comp = <StyledLegend
          className={`Text`}
          {...rest}
          size={size}
          transform={transform}
          decoration={decoration}
          weight={weight}
          color={color}
          lineHeight={lineHeight}
          data-testid="Text"
        >
          {children}
        </StyledLegend>
      break;
      case 'label':
        comp = <StyledLabel
          className={`Text`}
          {...rest}
          size={size}
          transform={transform}
          decoration={decoration}
          weight={weight}
          color={color}
          lineHeight={lineHeight}
          data-testid="Text"
        >
          {children}
        </StyledLabel>
      break;
      case 'span':
      default:
        comp = <StyledSpan
          className={`Text`}
          {...rest}
          size={size}
          transform={transform}
          decoration={decoration}
          weight={weight}
          color={color}
          lineHeight={lineHeight}
          data-testid="Text"
        >
          {children}
        </StyledSpan>
    }
    return comp

}

export const Text = ({ children, size, transform, decoration, weight, color, type = 'span', lineHeight, ...rest }: TextProps) => (
  <>
  {getTextTag({ children, size, transform, decoration, weight, color, type, lineHeight, ...rest })}
  </>
);
