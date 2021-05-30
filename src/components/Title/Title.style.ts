import styled, { css } from 'styled-components'
import { TitleProps } from './Title'
import titleBlackBG from '../../assets/img/titleBlackBG.svg'
import titleWhiteBG from '../../assets/img/titleWhiteBG.svg'
import titleYellowBG from '../../assets/img/titleYellowBG.svg'

const getBG = (bgName) => {
  let imageBG;
  switch(bgName){
    case 'black':
      imageBG = titleBlackBG;
    break;
    case 'yellow':
      imageBG = titleYellowBG;
    break;
    case 'white':
    default:
      imageBG = titleWhiteBG;
  }
  return imageBG;
}

const CSSTitle = css<TitleProps>`
  margin: 0;
  padding: 0;
  text-align: center;
  ${({ size }) => size && (`font-size: ${size}px;`)}
  ${({ color }) => color && (`color: ${color};`)}
  ${({ hasBG, bgColor }) => hasBG && (`
    background-image: url(${getBG(bgColor)});
    background-size: 25%;
    line-height: 2;
    background-repeat: no-repeat;
    background-position: center center;
  `)}

  @media(max-width: 1023px) {
    line-height: 1.5;
    ${({ size }) => size && (`font-size: ${size / 2}px;`)}
  }
`

export const StyledH2 = styled.h2<TitleProps>`
  ${CSSTitle}
`

export const StyledH3 = styled.h3<TitleProps>`
  ${CSSTitle}
`

export const StyledH4 = styled.h4<TitleProps>`
  ${CSSTitle}
`

export const StyledH5 = styled.h5<TitleProps>`
  ${CSSTitle}
`

export const StyledH6 = styled.h6<TitleProps>`
  ${CSSTitle}
`
