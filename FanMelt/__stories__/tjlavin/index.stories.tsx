import styled from "styled-components";
import { storiesOf } from '@storybook/react';
import StarIcon from "@material-ui/icons/Star";
import BoltIcon from "@material-ui/icons/OfflineBoltSharp";

import { CardListItem } from "components/CardListItem/CardListItem";

const categories = [
  "TV Hosts",
  "Reality TV",
  "Featured",
  "Extreme Sports",
  "MTV",
  "The Challenge",
  "BMX",
];

const rCards = [
  {
    price: "$25",
    src: "tjlavin_bottom.png",
    smallTitle: "MTV - The Challenge",
    title: "Zach Nichols"
  },
  {
    price: "$25",
    src: "tjlavin_bottom.png",
    smallTitle: "MTV - The Challenge",
    title: "Zach Nichols"
  },
  {
    price: "$25",
    src: "tjlavin_bottom.png",
    smallTitle: "MTV - The Challenge",
    title: "Zach Nichols"
  },
  {
    price: "$25",
    src: "tjlavin_bottom.png",
    smallTitle: "MTV - The Challenge",
    title: "Zach Nichols"
  }
];

const cardList = [
  {
    text: "A",
    title: "By Cubby for Brian",
    detail: "Details",
    src: "tjlavin_bottom.png",
  },
  {
    text: "A",
    title: "By Cubby for Brian",
    detail: "Details",
    src: "tjlavin_bottom.png",
  },
  {
    text: "A",
    title: "By Cubby for Brian",
    detail: "Details",
    src: "tjlavin_bottom.png",
  },
  {
    text: "A",
    title: "By Cubby for Brian",
    detail: "Details",
    src: "tjlavin_bottom.png",
  }
];

storiesOf('Pages|tjlavin', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Tjlavin Page',
    () => {
      return (
        <>
          <BodyWrapper>
            <BodyContainer>
              <BodyRow>
                <TopSectionContainer>
                  <TopSectionLeftContainer>
                    <img src="/tjlavin_top.png" alt="image" />
                  </TopSectionLeftContainer>
                  <TopSectionRightContainer>
                    <TopSectionRightContent>
                      <TopSectionTitle>
                        TJ Lavin
                        </TopSectionTitle>
                      <TopSectionSubTitle>
                        TV Host - MTV's The Challenge - BMX Rider
                        </TopSectionSubTitle>
                      <TopSectionTxt>
                        Good times only please unless we’re gonna smash someone as a joke! ❤️
                        </TopSectionTxt>
                      <TopSectionButtonContainer>
                        <ButtonContainer>
                          Book now for $100
                            </ButtonContainer>
                        <FollowBtn>
                          Follow
                            </FollowBtn>
                      </TopSectionButtonContainer>
                      <RespondDesc>
                        <BoltIcon />
                        <DescTxt>
                          TYPICALLY RESPONDS IN 3 HOURS.
                            </DescTxt>
                      </RespondDesc>
                      <ReviewContainer>
                        <ReviewStar>
                          <ReviewTitle>
                            491 Reviews
                                </ReviewTitle>
                          <ReviewContainer>
                            <ReviewSection>
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                            </ReviewSection>
                            <ReviewCount>
                              5 stars
                                    </ReviewCount>
                          </ReviewContainer>
                          <AllReviews>
                            See all reviews
                                </AllReviews>
                        </ReviewStar>
                        <ReviewDesc>
                          "Thank you TJ! That was perfect. Literally everything I hoped and more. Thanks dude"
                            </ReviewDesc>
                      </ReviewContainer>
                      <UserCategoryList>
                        {
                          categories.map((c, i) => {
                            return <UserCatItem key={i}>{c}</UserCatItem>
                          })
                        }
                      </UserCategoryList>
                    </TopSectionRightContent>
                  </TopSectionRightContainer>
                </TopSectionContainer>
              </BodyRow>
              <BodyRow>
                <ResultsContainer>
                  <ResultTitle>
                    Latest
                  </ResultTitle>
                  <ResultsGrid>
                    {
                      cardList.map((card, index) => {
                        return <CatItemWrapper>
                          <CatItemContainer>
                            <CatItemTxtSection>
                              <CatItemLeftContent>
                                <CatLeftTxt>
                                  {card.text}
                                </CatLeftTxt>
                              </CatItemLeftContent>
                              <CatItemRightContent>
                                <CatItemTitle>
                                  {card.title}
                                </CatItemTitle>
                                <CatItemDetailTxt>
                                  {card.detail}
                                </CatItemDetailTxt>
                              </CatItemRightContent>
                            </CatItemTxtSection>
                            <CatItemVideoSection>
                              <CatImageItem>
                                <img src={card.src} alt="image" />
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
                      })
                    }
                  </ResultsGrid>
                </ResultsContainer>
              </BodyRow>
              <BodyRow>
                <ResultsContainer>
                  <ResultTitle>
                    Related
                  </ResultTitle>
                  <ResultsGrid>
                    {
                      rCards.map((card, i) => {
                        return <GridImageWrapper key={i}>
                          <GridImageContainer>
                            <Price>{card.price}</Price>
                            <ImageItem>
                              <img src={card.src} alt="image" />
                            </ImageItem>
                            <ImageContent>
                              <SmallTitle>{card.smallTitle}</SmallTitle>
                              <Title>{card.title}</Title>
                            </ImageContent>
                          </GridImageContainer>
                        </GridImageWrapper>
                      })
                    }
                  </ResultsGrid>
                </ResultsContainer>
              </BodyRow>
            </BodyContainer>
          </BodyWrapper>
        </>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

const ResultTitle = styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-top: 24px;
    margin-bottom: 12px;
`
const UserCatItem = styled.a`
    padding: 9px 18px;
    margin: 0 12px 7px 0;
    border-radius: 30px;
    display: inline-block;
    background-color: #f7f7f7;
    color: #4d4d4d;
    text-decoration; none;
    font-size: 18px;
    &:hover {
      background-color: #ececec;
    }
`
const UserCategoryList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
`
const AllReviews = styled.a`
    cursor: pointer;
    color: #337ab7;
    text-decoration: none;
    font-size: 18px;
   
`
const ReviewCount = styled.div`
    color: #4d4d4d;
    font-size: 16px;
    font-weight: 700;
    margin: 8px 0px;
`
const ReviewSection = styled.div`
    color: #ffc200;
    
`
const ReviewTitle = styled.div`
    font-weight: 700;
    font-size: 18px;
    color: #4d4d4d;
`
const ReviewDesc = styled.div`
    width: 66.6666%;
    max-width: 420px;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const ReviewStar = styled.div`
    width: 33.3333%;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const ReviewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`
const RespondDesc = styled.div`
    margin-bottom: 20px;
    svg {
        color: gold;
    }
`
const DescTxt = styled.span`
    padding-left: 10px;
    font-size: 14px;
    letter-spacing: .5px;
    font-weight: 600;
    text-transform: uppercase;
`
const FollowBtn = styled.a`
    color: #131631;
    background-color: transparent;
    padding: 4px 24px;
    margin-right: 1.5rem;
    border-radius: 3px;
    line-height: 1.5;
    text-align: center;
    vertical-align: center;
    border: 2px solid #131631;
    margin-bottom: 12px;
    cursor: pointer;
    @media (max-width: 768px) {
      color: #ffffff;
      border-color: #ffffff;
      position: absolute;
      top: 20px;
      left: 50%;
    }
`
const ButtonContainer = styled.a`
    color: #ffffff;
    cursor: pointer;
    background-color: #fa005c;
    padding: 6px 21px 6px 21px;
    margin-bottom: 12px;
    margin-right: 1.5rem;
    boder: none;
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    translation: all .4s;
    border-radius: 3px;
    line-height: 1.5;
    text-align: center;
    vertical-align: center;
    min-width: 205px;
    max-width: 100%;
    @media (max-width: 768px) {
      width: 100%;
      margin-right: 0px;
   }
`
const TopSectionButtonContainer = styled.div`
  display: flex;
  font-size: 18px;
  margin-top: 24px;
`;

const TopSectionTxt = styled.div`
  color: #4d4d4d;
  font-size: 18px;
  line-height: 1.5;
`;

const TopSectionSubTitle = styled.div`
  color: #4d4d4d;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const TopSectionTitle = styled.div`
  color: #4d4d4d;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  font-size: 36px;
`;

const TopSectionRightContent = styled.div`
  padding-left: 30px;
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const TopSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  font-size: 18px;
  margin-bottom: 40px;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BodyWrapper = styled.div`
  margin-top: 0;
  padding-top: 70px;
`;

const BodyContainer = styled.div.attrs({ className: "container" })`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1280px){
    max-width: 1170px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0px;
  }
`;

const Title = styled.h3`
  color: #4d4d4d;
  margin: 0;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: 700;
`;

const BodyRow = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  
  @media (min-width: 1200px) {
    margin-left: 8.333333%;
    margin-right: 8.333333%;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const ResultsContainer = styled.div.attrs({ className: "w-6/6" })`
  margin-left: auto;
  margin-right: auto;
  box-sizing: inherit;
  @media (max-width: 1024px) {
    width: 100% !important;
  }
  @media (max-width: 1024px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const ResultsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TopSectionLeftContainer = styled.div`
  max-width: 280px;
  img {
    width: 100%;
    border-radius: 10px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    margin: auto;
  }
`;

const TopSectionRightContainer = styled.div`
  width: 66.666666%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const GridImageContainer = styled.div`
  box-shadow: 4px 4px 17px hsla(0, 0%, 85.9%, 0.5);
  position: relative;
  background-size: cover;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 5px;
  /* cursor: pointer; */
  height: 100%;
  &:hover {
    transform: translateY(-3px);
  }
`;

const GridImageWrapper = styled.div.attrs({
  className: "w-1/4"
})`
  margin-bottom: 20px;
  min-height: 170px;
  max-height: 350px;
  padding-right: 5px !important;
  padding-left: 5px !important;
  max-width: 225px;
  width: 25%;

  @media (max-width: 768px) {
    width: 50% !important;
  }
  @media (max-width: 320px) {
    height: 220px;
  }
`;

const Price = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 1px 14px;
  position: absolute;
  right: 11px;
  top: 11px;
  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

const ImageItem = styled.div`
  background: #eee;
  height: 100%;
  width: 100%;
  max-height: 280px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 280px;
  }
`;

const ImageContent = styled.div`
  height: 30%;
  width: 100%;
  padding: 10px 12px;
`;

const SmallTitle = styled.a`
  color: #6c6c6c;
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  &:after {
    font-size: 13px;
    content: "•";
    padding: 0 3px;
    display: ${props => (props.bottom ? "inline-block" : "none")};
  }
  &:hover {
    text-decoration: ${props => (props.bottom ? "underline" : null)};
  }
`;

const CatItemWrapper = styled.div.attrs({
  className: "xl:w-1/3"

})`
  margin-bottom: 20px;
  min-height: 270px;
  max-height: 650px;
  padding-right: 10px !important;
  padding-left: 10px !important;
  min-width: 145px;
  width: 31% !important;

  @media (max-width: 768px) {
    width: 100% !important;
    margin: 20px 30px;
  }
`;

const ImgBtnContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CatImageItem = styled.div`
  height: 70%;
  width: 100%;

  img {
    border-radius: 24px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CatLeftTxt = styled.div`
    font-weight: 700;
    font-size: 24px;
    padding-bottom: 2px;
    text-transform: uppercase;
`
const CatItemContainer = styled.div`
  box-shadow: 0 2PX 32PX 0 RGBA(0,0,0,.15);
  position: relative;
  background-size: cover;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 24px;
  /* cursor: pointer; */
  height: 100%;

  &:hover {
    transform: translateY(-3px);
  }
`
const CatItemDetailTxt = styled.div`
    color: #999;
    font-size: 14px;
    font-weight: 500;
`
const CatItemTitle = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    @media (max-width: 1280px) {
        width: 150px;
      }
    @media (max-width: 1024px) {
        width: 100px;
      }
`
const CatItemVideoSection = styled.div`
    
`
const CatItemLeftContent = styled.div`
    border-color: rgb(213, 56, 255);
    background-color: rgb(213, 56, 255);
    backgroundc-clip: border-box;
    background-image: none;
    algign-items: center;
    background-position: top;
    border-radius: 50%;
    display: flex;
    height: 36px;
    justify-content: center;
    margin-right: 14px;
    width: 36px;
`
const CatItemRightContent = styled.div`
    
`
const ImgBtnLeftContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 60px;
        height: 60px;
        background: transparent;
        margin-bottom: 0px;
        transform: scale(1);
        transition: transform .1s;
        
        &:hover {
            transform: scale(1.3);
            transition: transform .1s;
        }
    }
`

const ImgBtnRightContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 24px;
        height: 24px;
        background: transparent;
        margin-bottom: 0px;
        margin-left: 20px;
        transform: scale(1);
        transition: transform .1s;
        &:hover {
            transform: scale(1.3);
            transition: transform .1s;
        }
    }
`

const CatItemTxtSection = styled.div`
    display: flex;
    padding: 10px 15px;
    color: #212121;
    border-color: #dddddd'
    border-bottom: none;
`