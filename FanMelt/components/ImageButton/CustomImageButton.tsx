import React from 'react';
import { DownloadButton, DownloadContainer, DownloadImage, DownloadText } from './Styled';

interface IProps {
  text: string;
  src: string;
}

export const CustomImageButton = ({ text, src }: IProps) => {
  return (
    <DownloadButton>
        <DownloadContainer>
            <DownloadImage src={src} />
            <DownloadText>{text}</DownloadText>
        </DownloadContainer>
    </DownloadButton>
  )
}
