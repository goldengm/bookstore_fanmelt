import React from 'react'
import { GridImageWrapper, GridImageContainer,  Price, ImageItem, ImageContent, SmallTitle, Title} from './Styled'

interface IProps {
    price: string;
    src: string;
    smallTitle: string;
    title: string;
}

export const RelatedCard = ({price, src, smallTitle, title}: IProps) => {
    return (
        <GridImageWrapper>
            <GridImageContainer>
                <Price>{price}</Price>
                <ImageItem>
                    <img src={src} alt="image" />
                </ImageItem>
                <ImageContent>
                    <SmallTitle>{smallTitle}</SmallTitle>
                    <Title>{title}</Title>
                </ImageContent>
            </GridImageContainer>
        </GridImageWrapper>
    )
}
