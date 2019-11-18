import styled from "styled-components";
import {NavBar} from "../components/NavBar/NavBar";
import CheckIcon from "@material-ui/icons/Check";
import { Footer } from "../components/Footer/Footer";
import {RelatedCard} from "../components/RelatedCard/RelatedCard";
import { ImageContent } from "../components/ImageContent/ImageContent";

const Index = () => (
    <>
        <NavBar />
        <Body />
        <Footer />
    </>
);

export default Index;

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

const TalentLink = styled.a.attrs({className: 'text-lg'})`
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

const Body = () => (
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
                            {
                                imageContents.map((content, index) => {
                                    return <ImageContent src={content.src} text={content.text} key={index} />
                                })
                            }
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
                                return <RelatedCard price={card.price} src={card.src} smallTitle={card.smallTitle} title={card.title} key={index} />
                            })
                        }
                    </ResultsGrid>
                </ResultsContainer>
            </BodyRow>
        </BodyContainer>
    </BodyWrapper>
);
const ImageContainer = styled.div.attrs({
    className: 'relative py-100 px-0'
})`
    height: 50px;
    left: -15px;

    img {
        height: 30px;
        width: 30px;
        min-width: 30px;
        background: #f7f7f7;
}`

const RowTextContent = styled.div`
    
`
const RightContentRow = styled.div.attrs({
    className: "items-center flex ml-15 pb-30 text-4d"
})`
    min-height: 54px;
`
const RightContentContainer = styled.div.attrs({
    className: 'py-0 px-10 m-lmd:py-5 lmd:px-15'
})`
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
const RightContentWrapper = styled.div.attrs({
    className: "px-15 relative"
})` 
    @media screen and (min-width: 992px){
        margin-left: 8.33%;
    }
`
const OrderBtnContainer = styled.div.attrs({
    className: 'flex justify-center flex-col mt-5'
})`
`
const ModifyOrderBtn = styled.div.attrs({
    className: 'bg-transparent uppercase border-0 font-normal text-center whitespace-no-wrap align-middle cursor-pointer leading-normal mx-auto my-0 py-100 px-60'
})`
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    transition: all .4s;
    touch-action: manipulation;
    border-radius: 3px;
`
const CancelOrderBtn = styled.div.attrs({
    className: 'shadow-none no-underline bg-transparent border-transparent mx-auto mt-5 mb-0'
})`
`
const PirceTxt = styled.span.attrs({
    className: 'font-medium'
})`
`
const DescTxt = styled.div`
    
`
const SubTitle = styled.div.attrs({
    className: 'font-bold mb-600 mt-5 text-22'
})`
`
const HeaderRow = styled.div.attrs({
    className: "pt-600 lmd:pt-0 bg-f7"
})`
`;

const HeaderBackImage = styled.span.attrs({
    className: "bg-no-repeat w-full -mt-60 block absolute lmd:hidden z-0"
})`
    background-image: url(https://d3el26csp1xekx.cloudfront.net/static/assets/confirmation-page/bigConfetti.png);
    background-position: 0;
    background-size: 1500px;
    height: 200px;
`
const OrderHeader = styled.div.attrs({
    className: 'flex bg-white flex-col mx-15 mt-15 py-0 px-15 text-left relative lmd:mb-30 lmd:mx-0 lmd:py-30 lmd:text-center'
})`
    z-index: 1;
    
`;
const OrderBackImage = styled.span.attrs({
    className: 'hidden bg-no-repeat absolute mld:inline-block'
})`
    background-image: url(https://d3el26csp1xekx.cloudfront.net/static/assets/confirmation-page/bigConfetti.png);
    background-position: 50%;
    background-size: 2000px;
    height: 350px;
    margin-top: -73px;
    width: 99%;
    z-index: -1;
`;
const UserImageLink = styled.a.attrs({
    className: 'self-center inline-block no-underline'
})`
`
const UserImage = styled.img.attrs({
    className: 'self-center inline-block no-underline border-2 border-solid border-fa rounded-half h-56 w-56 mld:w-78 mld:h-78 mld:mt-0'
})`
    margin-top: -28px;
`
const OrderMessage = styled.h1.attrs({
    className: 'uppercase mt-6 mb-3 text-22 text-fa mld:text-32'
})`
    z-index: 2;
    
`;
const MessageContent = styled.span.attrs({
    className: 'font-bold antialiased tracking-1 leading-1-1'
})`
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
const OrderStatus = styled.div.attrs({
    className: 'text-lg py-1 pr-1 pl-0 text-center m-lmd:text-left tracking-1 antialiased'
})`
    z-index: 3;
    background-color: hsla(0,0%,100%,.8);
`;

const LeftCol = styled.div.attrs({
    className: 'relative px-15 lmd:w-6/12 lmd:float-left'
})`    
    min-height: 1px;    
`;
const RightCol = styled.div.attrs({
    className: 'relative lmd:float-left lmd:w-6/12 px-15'
})`
    min-height: 1px;    
`;
const RequestDetails = styled.div.attrs({
    className: 'bg-white -mt-30 py-5 px-15 lmd:px-10 lmd:mt-0'
})`
    box-shadow: 2px 5px 10px #ececec;
`
const DetailTitle = styled.h2.attrs({
    className: "font-bold mt-6 mb-3 leading-1-1 text-22 mld:text-32"
})`
`;
const BlockSeparator = styled.div.attrs({
    className: 'mt-30 pt-300 relative lmd:hidden'
})`
    background-image: linear-gradient(90deg,transparent 50%,#f2f2f2 0);
    background-size: 38px 1px;
    margin-bottom: 50px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    left: 0px;
`;
const Separator = styled.div.attrs({
    className: 'mb-5 mt-30 lmd:hidden'
})`
    background-image: linear-gradient(90deg,transparent 50%,#f2f2f2 0);
    background-size: 38px 1px;  
    height: 4px;
    &:before {
            background: #f7f7f7;
            height: 60px;
            top: -25px;
            width: 60px;            
    }
`;
const ResultTitle = styled.div.attrs({
    className: 'font-bold mt-6 mb-3 text-25'
})`
`;


const BodyWrapper = styled.div.attrs({className: 'text-lg mt-0 pt-65 antialiased tracking-1 bg-f7'})`
`;

const BodyContainer = styled.div.attrs({ className: "container px-15 mx-auto xl:w-1170 m-mld:w-full m-mld:p-0 m-md:max-w-full m-md:p-0" })`
`;

const BodyRow = styled.div.attrs({
    className: '-mx-15 px-15 flex m-lmd:flex-col text-4d'
})`
  min-height: 1px;
`;

const ResultsContainer = styled.div.attrs({ className: "w-6/6 mx-auto mt-5 m-lg:w-full m-lg:px-15" })`
`;

const ResultsGrid = styled.div.attrs({
    className: 'flex flex-wrap'
})`
`;
