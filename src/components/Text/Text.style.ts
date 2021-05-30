import styled, { css } from 'styled-components'
import { TextProps } from './Text'

const CSSText = css<TextProps>`
  ${({ color }) => color && (`color: ${color};`)}
  ${({ weight }) => weight && (`font-weight: ${weight};`)}
  ${({ decoration }) => decoration && (`text-decoration: ${decoration};`)}
  ${({ transform }) => transform && (`text-transform: ${transform};`)}
  ${({ size }) => size && (`font-size: ${size}px;`)}
  ${({ lineHeight }) => lineHeight && (`line-heigth: ${lineHeight};`)}
`

export const StyledParagraph = styled.p<TextProps>`
  ${CSSText}
`

export const StyledSpan = styled.span<TextProps>`
  ${CSSText}
`

export const StyledLegend = styled.legend<TextProps>`
  ${CSSText}
`

export const StyledLabel = styled.label<TextProps>`
  ${CSSText}
`