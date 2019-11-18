import React from 'react'
import { CatItemWrapper, CatItemContainer,  CatItemTxtSection, CatItemLeftContent,
    CatItemRightContent, CatLeftTxt, CatItemTitle,
    CatItemVideoSection,CatItemDetailTxt,CatImageItem,
    ImgBtnContainer,ImgBtnLeftContainer,ImgBtnRightContainer} from './Styled'

interface IProps {
    text: string;
    title: string;
    detail: string;
    src: string;
}

export const CardListItem = ({text, title, detail, src}: IProps) => {
    return (
        <CatItemWrapper>
            <CatItemContainer>
                <CatItemTxtSection>
                    <CatItemLeftContent>
                        <CatLeftTxt>
                            {text}
                        </CatLeftTxt>
                    </CatItemLeftContent>
                    <CatItemRightContent>
                        <CatItemTitle>
                            {title}
                        </CatItemTitle>
                        <CatItemDetailTxt>
                            {detail}
                        </CatItemDetailTxt>
                    </CatItemRightContent>
                </CatItemTxtSection>
                <CatItemVideoSection>
                    <CatImageItem>
                        <img src={src} alt="image" />
                        <ImgBtnContainer>
                            <ImgBtnLeftContainer>
                                <img src="play.svg" alt="image" />
                            </ImgBtnLeftContainer>
                            <ImgBtnRightContainer>
                                <img src='heart-white.svg' alt='image' />
                                <img src='message-circle-white.svg' alt='image' />
                            </ImgBtnRightContainer>
                        </ImgBtnContainer>
                    </CatImageItem>
                </CatItemVideoSection>
            </CatItemContainer>
        </CatItemWrapper>
    )
}
