import React from 'react'
import { ShareButton } from './Styled'

interface IProps {
  text: string;
  color: string;
  bgColor: string;
  fSize: string;
  fWeight: string;
  padding: string;
  lSpaceing: string;
  hoverC: string;
  hoverBG: string;
}

export const CustomButton = ({ text, color, bgColor, fSize, fWeight, padding, lSpaceing, hoverC, hoverBG }: IProps) => {
  return (
    <ShareButton 
      color={color}
      bgColor={bgColor}
      fSize={fSize}
      fWeight={fWeight}
      padding={padding}
      lSpaceing={lSpaceing}
      hoverBG={hoverBG}
      hoverC={hoverC}
    >
      {text}
    </ShareButton>
  )
}
