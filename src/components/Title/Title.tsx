import React, { ReactNode } from 'react';
import { 
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6
} from './Title.style';

type LevelType = 1 | 2 | 3 | 4 | 5
type ColorType = 'black' | 'white' | 'yellow'

export type TitleProps = {
  children?: ReactNode
  level?: LevelType
  size?: number
  color?: string
  hasBG?: boolean
  bgColor?: ColorType
}

const getTitleByLevel = (level, children, size, color, hasBG, bgColor) => {
  let comp = <></>
  switch(level) {
    case 2:
      comp = <StyledH3
        size={size}
        hasBG={hasBG}
        bgColor={bgColor}
        color={color}
      >{children}</StyledH3>
    break;
    case 3:
      comp = <StyledH4
        size={size}
        hasBG={hasBG}
        bgColor={bgColor}
        color={color}
      >{children}</StyledH4>
    break;
    case 4:
      comp = <StyledH5
        size={size}
        hasBG={hasBG}
        bgColor={bgColor}
        color={color}
      >{children}</StyledH5>
    break;
    case 5:
      comp = <StyledH6
        size={size}
        hasBG={hasBG}
        bgColor={bgColor}
        color={color}
      >{children}</StyledH6>
    break;
    case 1:
    default:
      comp = <StyledH2
        size={size}
        hasBG={hasBG}
        bgColor={bgColor}
        color={color}
      >{children}</StyledH2>
  }
  return comp
}

export const Title = ({ 
  children, 
  level = 1, 
  size = 64, 
  color = '#414141',
  hasBG, 
  bgColor 
}: TitleProps) => (
  <>
    {getTitleByLevel(level, children, size, color, hasBG, bgColor)}
  </>
);
