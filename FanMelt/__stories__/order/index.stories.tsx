import styled from "styled-components";
import { storiesOf  } from '@storybook/react';

import CheckIcon from "@material-ui/icons/Check";

import {RelatedCard} from "components/RelatedCard/RelatedCard";

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

const TalentLink = styled.a`
    color: #337ab7;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    letter-spacing: .1px;
    font-size: 18px;
`;

const imageContents = [
    {
        src: 'confirmation-email.svg',
        text: ["Check your email, We sent a confirmation to ", <b>liamdanielduffy@gmail.com</b>]
    },
    {
        src: 'confirmation-calendar.svg',
        text: [<TalentLink> Adam Pike </TalentLink>, " has ", <b>4 days</b>, " to complete your request"]
    },
    {
        src: 'confirmation-computer.svg',
        text: ["When your request is completed, we'll email you a link to review, share, or download your Cameo"]
    },
    {
        src: 'confirmation-credit-card.svg',
        text: ["if ", <TalentLink> Adam Pike </TalentLink>, " isn't able to complete your request, the ", <b>$5</b>, " hold on your card will be removed within 5~7 business days."]
    }
];

storiesOf('Pages|Order', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Order Page',
    () => {
        return (
            <BodyWrapper>
                <HeaderRow>
                    <HeaderBackImage/>
                    <OrderHeader>
                        <OrderBackImage/>
                        <UserImageLink>
                            <UserImage src={'https://d31wcbk3iidrjq.cloudfront.net/qTx6nbG2A-2AD4CBF9-825B-4B71-AF7F-EDF24CC95FF0.jpg?w=180&h=180&q=80'}/>
                        </UserImageLink>
                        <OrderMessage>
                            <MessageContent>
                                <CheckIcon />
                                Your Request is booked
                            </MessageContent>
                        </OrderMessage>
                        <OrderStatus>
                            Your request was sent to
                            <TalentLink> Adam Pike</TalentLink>
                            . You should receive an email shortly.
                        </OrderStatus>
                    </OrderHeader>
                </HeaderRow>

                <BodyContainer>
                    <BodyRow>
                        <LeftCol>
                            <RequestDetails>
                                <BlockSeparator/>
                                <DetailTitle> Request Details </DetailTitle>
                                <Separator/>
                                <SubTitle>
                                    Talent Requested
                                </SubTitle>
                                <TalentLink>Adam Pike</TalentLink>
                                <SubTitle>
                                    Video For
                                </SubTitle>
                                <DescTxt> Nirav</DescTxt>
                                <SubTitle>
                                    Booked By
                                </SubTitle>
                                <DescTxt>Liam</DescTxt>
                                <SubTitle>
                                    Instructions
                                </SubTitle>
                                <DescTxt>
                                    My friend Nirav just moved home after a long time from home, and I'd love you to give him a big welcome
                                    home message :)
                                </DescTxt>
                                <DescTxt>
                                    Booked Privately
                                </DescTxt>
                                <SubTitle>
                                    Charged (if fulfilled): <PirceTxt> $5</PirceTxt>
                                </SubTitle>
                                <SubTitle>
                                    Request expires on: <PirceTxt> 11/08/2019</PirceTxt>
                                </SubTitle>
                                <SubTitle>
                                    Delivery Info
                                </SubTitle>
                                <SubTitle>
                                    Email: <PirceTxt> liamdanielduffy@gmail.com</PirceTxt>
                                </SubTitle>
                                <OrderBtnContainer>
                                    <ModifyOrderBtn>
                                        Modify Order
                                    </ModifyOrderBtn>
                                    <CancelOrderBtn>
                                        Cancel Order
                                    </CancelOrderBtn>
                                </OrderBtnContainer>
                            </RequestDetails>
                        </LeftCol>

                        <RightCol>
                            <RightContentWrapper>
                                <RightContentContainer>
                                    <DetailTitle>
                                        What happens next?
                                    </DetailTitle>
                                        { imageContents.map((image, i) => {
                                            return <RightContentRow key={i}>
                                                      <ImageContainer>
                                                          <img src={image.src} alt='image' />
                                                      </ImageContainer>
                                                      <RowTextContent>
                                                          {image.text}
                                                      </RowTextContent>
                                                  </RightContentRow>
                                          })}
                                </RightContentContainer>
                            </RightContentWrapper>
                        </RightCol>
                    </BodyRow>
                    <BodyRow>
                        <ResultsContainer>
                            <ResultTitle>
                                Also check out
                            </ResultTitle>
                            <ResultsGrid>
                                {
                                    rCards.map((card, index) => {
                                        return <GridImageWrapper>
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
        )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

const ImageContainer = styled.div`
    height: 50px;
    left: -15px;
    padding: 10px 0;
    position: relative;
    img {
        height: 30px;
        width: 30px;
        min-width: 30px;
        background: #f7f7f7;
}`

const RowTextContent = styled.div`
    
`
const RightContentRow = styled.div`
    align-items: center;
    display: flex;
    margin-left: 15px;
    min-height: 54px;
    padding-bottom: 30px;
    color: #4d4d4d;
`
const RightContentContainer = styled.div`
    padding: 0 40px;
    @media screen and (max-width: 992px){
        padding: 20px 15px;
    }
    &:before {
        border-left: 1px solid #e5e5e5;
        bottom: 18%;
        content: "";
        display: inline-block;
        height: 60%;
        left: 44px;
        margin: 0 auto;
        position: absolute;
        top: 22%;
        width: 0;
        @media screen and (min-width: 992px){
            bottom: 16%;
            height: 67%;
            left: 69px;
            top: 17%;
        }
    }
`
const RightContentWrapper = styled.div`   
    padding-left: 15px;
    padding-right: 15px;    
    position: relative;
    @media screen and (min-width: 992px){
        margin-left: 8.33%;
    }
`
const OrderBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
`
const ModifyOrderBtn = styled.div`
    background: transparent;
    text-transform: uppercase;
    border: none;
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    transition: all .4s;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    line-height: 1.5;
    border-radius: 3px;
    margin: 0 auto;
    padding: 10px 60px;
`
const CancelOrderBtn = styled.div`
    box-shadow: none;
    text-decoration: none;
    background-color: transparent;
    border-color: transparent;
    margin: 0 auto;
    margin-top: 20px;
`
const PirceTxt = styled.span`
    font-weight: 500;
`
const DescTxt = styled.div`
    
`
const SubTitle = styled.div`
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 6px;
    margin-top: 20px;
`
const HeaderRow = styled.div `
    background: #f7f7f7;
    padding-top: 60px;
    
    @media (min-width: 992px) {
        padding-top: 0;
    }
`;

const HeaderBackImage = styled.span `
    background-image: url(https://d3el26csp1xekx.cloudfront.net/static/assets/confirmation-page/bigConfetti.png);
    background-position: 0;
    background-size: 1500px;
    background-repeat: no-repeat;
    width: 100%;
    height: 200px;
    margin-top: -60px;
    z-index: 0;
    display: block;
    position: absolute;
    
    @media (min-width: 992px) {
        display: none
    }
`
const OrderHeader = styled.div`
    display: flex;
    background: #fff;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;
    padding: 0 15px;
    text-align: left;
    position: relative;
    z-index: 1;
    
    @media (min-width: 992px) {
        margin-bottom: 30px;
        margin-left: 0;
        margin-right: 0;
        padding-bottom: 30px;
        padding-top: 30px;
        text-align: center
    }    
    
`;
const OrderBackImage = styled.span `
    background-image: url(https://d3el26csp1xekx.cloudfront.net/static/assets/confirmation-page/bigConfetti.png);
    display: none;
    background-position: 50%;
    background-size: 2000px;
    display: none;
    height: 350px;
    margin-top: -73px;
    width: 99%;
    z-index: -1;
    background-repeat: no-repeat;
    position: absolute;
        
    @media (min-width: 992px) {
        display: inline-block
    }
`;
const UserImageLink = styled.a`
    align-self: center;
    display: inline-block;
    text-decoration: none
`
const UserImage = styled.img`
    align-self: center;
    display: inline-block;
    text-decoration: none;
    border: 2px solid #fa005c;
    border-radius: 50%;
    height: 56px;
    margin-top: -28px;
    width: 56px;
    
    @media (min-width: 992px) {
        height: 78px;
        margin-top: 0;
        width: 78px;
    }
`
const OrderMessage = styled.h1`
    color: #fa005c;
    font-size: 22px;
    text-transform: uppercase;
    z-index: 2;
    margin-top: 24px;
    margin-bottom: 12px;
    
    @media (min-width: 992px) {
        font-size: 32px
    }
`;
const MessageContent = styled.span `
    font-weight: 700;
    line-height: 1.1;
    -webkit-font-smoothing: antialiased;
    letter-spacing: .1px;  
    svg {
        background: #fa005c;
        color: white;
        border-radius: 50%;
        margin-bottom: 11px;
        margin-right: 10px;
        
        @media (max-width: 992px) {
            display: none;
        }
    }
`;
const OrderStatus = styled.div`
    z-index: 3;
    background-color: hsla(0,0%,100%,.8);
    padding: 4px 4px 4px 0;
    text-align: center;
    font-size: 18px;
    letter-spacing: 0.1px;
    -webkit-font-smoothing: antialiased;
    @media (max-width: 992px) {
        text-align: left;
    }
`;

const LeftCol = styled.div`    
    position: relative;
    min-height: 1px;    
    padding-right: 15px;
    padding-left: 15px;
    
    @media (min-width: 992px) {       
        float: left;
        width: 50%
    }
`;
const RightCol = styled.div`
    position: relative;
    min-height: 1px;    
    @media (min-width: 992px) {       
        float: left;
        width: 50%;
        padding-right: 15px;
        padding-left: 15px;
    }
`;
const RequestDetails = styled.div`
    background: #fff;
    box-shadow: 2px 5px 10px #ececec;
    margin-top: -30px;
    padding: 20px 15px;
    
    @media (min-width: 992px) {
        padding-left: 40px;
        padding-right: 40px;
        margin-top: 0;
    }
`
const DetailTitle = styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: 1.1;
    margin-top: 24px;
    margin-bottom: 12px;
    
    @media (min-width: 992px) {
        font-size: 30px
    }
`;
const BlockSeparator = styled.div`
    background-image: linear-gradient(90deg,transparent 50%,#f2f2f2 0);
    background-size: 38px 1px;
    margin-bottom: 50px;
    margin-top: 30px;
    padding-top: 3px;
    position: relative;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    left: 0px;
  
    
    @media (min-width: 992px) {
        display: none;
    }
`;
const Separator = styled.div`
    background-image: linear-gradient(90deg,transparent 50%,#f2f2f2 0);
    background-size: 38px 1px;
    margin-bottom: 20px;
    margin-top: 30px;   
    height: 4px;
    &:before {
            background: #f7f7f7;
            height: 60px;
            top: -25px;
            width: 60px;            
    }
    @media (max-width: 992px) {
        display: none;
    }
`;
const ResultTitle = styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-top: 24px;
    margin-bottom: 12px;
`;


const BodyWrapper = styled.div`
  margin-top: 0;
  padding-top: 65px;
  -webkit-font-smoothing: antialiased;
    letter-spacing: .1px;
    font-size: 18px;
    background: #f7f7f7;
`;

const BodyContainer = styled.div.attrs({ className: "container" })`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1280px){
    max-width: 1170px;
  }
  @media (max-width: 992px) {
        width: 100%;
        max-width: 100%;
        padding: 0px;
    }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0px;
  }
`;

const BodyRow = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  color: #4d4d4d;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ResultsContainer = styled.div.attrs({ className: "w-6/6" })`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
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
  max-width: 280px;
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
