import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import BoltIcon from "@material-ui/icons/OfflineBoltSharp";
import { Footer } from "../components/Footer/Footer";
import {NavBar} from "../components/NavBar/NavBar";
import {RelatedCard} from "../components/RelatedCard/RelatedCard";
import {CardListItem} from "../components/CardListItem/CardListItem";


const Index = () => (
  <>
    <NavBar />
    <Body />
    <Footer />
  </>
);

export default Index;

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

const Body = () => (
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
                return <CardListItem text={card.text} src={card.src} detail={card.detail} title={card.title} key={index} />
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
export const ResultTitle = styled.div.attrs({className: "font-bold mt-6 mb-3"})`
    font-size: 1.5625rem;
`
export const UserCatItem = styled.a.attrs({className: 'text-lg px-180 py-900 mt-0 mr-3 mb-700 ml-0 inline-block no-underline'})`
    border-radius: 30px;
    background-color: #f7f7f7;
    color: #4d4d4d;
    &:hover {
      background-color: #ececec;
    }
`
export const UserCategoryList = styled.div.attrs({className: "flex flex-wrap mt-6"})`
`
export const AllReviews = styled.a.attrs({className: 'text-lg cursor-pointer no-underline'})`
    cursor: pointer;
`
export const ReviewCount = styled.div.attrs({className: 'text-base font-bold mx-0 my-2'})`
    color: #4d4d4d;
`
export const ReviewSection = styled.div.attrs({className: ""})`
    color: #ffc200;
    
`
export const ReviewTitle = styled.div.attrs({className: 'text-lg font-bold'})`
    color: #4d4d4d;
`
export const ReviewDesc = styled.div.attrs({className: "w-2/3 m-md:w-full"})`
    max-width: 420px;
`
export const ReviewStar = styled.div.attrs({className: "w-1/3 mb-5 m-md:w-full"})`
`
export const ReviewContainer = styled.div.attrs({className: "flex flex-wrap items-center"})`
`
export const RespondDesc = styled.div.attrs({className: "mb-5"})`
    svg {
        color: gold;
    }
`
export const DescTxt = styled.span.attrs({
  className: 'text-sm pl-100 font-semibold uppercase'
})`
    letter-spacing: .5px;
`
export const FollowBtn = styled.a.attrs({
  className: 'bg-transparent py-1 px-6 mr-6 leading-normal text-center align-center mb-3 cursor-pointer m-md:text-white m-md:border-white m-md:absolute'
})`
    color: #131631;
    border-radius: 3px;
    border: 2px solid #131631;
    @media (max-width: 768px) {
      top: 20px;
      left: 50%;
   }
`
export const ButtonContainer = styled.a.attrs({
  className: "text-white cursor-pointer py-600 px-21 mb-3 mr-6 border-0 leading-normal text-center align-center m-md:w-full m-md:mr-0"
})`
    background-color: #fa005c;
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    translation: all .4s;
    border-radius: 3px;
    min-width: 205px;
    max-width: 100%;
`
export const TopSectionButtonContainer = styled.div.attrs({className: 'text-lg flex mt-6'})`
`;

export const TopSectionTxt = styled.div.attrs({className: 'text-lg leading-normal'})`
  color: #4d4d4d;
`;

export const TopSectionSubTitle = styled.div.attrs({
  className: "font-semibold leading-normal mb-15"
})`
  color: #4d4d4d;
  font-size: 1.375rem;
`;

export const TopSectionTitle = styled.div.attrs({
  className: 'text-4xl font-bold truncate'
})`
  color: #4d4d4d;
`;

export const TopSectionRightContent =  styled.div.attrs({
  className: "pl-30 m-md:px-15"
})`
`;

export const TopSectionContainer = styled.div.attrs({
  className: 'text-lg flex flex-row mt-6 mb-10 relative m-md:flex-col'
})`
`;

export const BodyWrapper = styled.div.attrs({
  className: "mt-0 pt-70"
})`
  margin-top: 0;
  padding-top: 70px;
`;

export const BodyContainer = styled.div.attrs({
  className: "container px-15 mx-auto xl:w-1170 m-md:max-w-full m-md:p-0"
})`
`;

export const Title = styled.h3.attrs({
  className: 'text-xl m-0 truncate font-bold text-4d'
})`
  word-wrap: break-word;
`;

export const BodyRow = styled.div.attrs({
  className: "-mx-15 flex px-15 m-lg:flex m-lg:flex-col"
})`
  min-height: 1px;
  
  @media (min-width: 1200px) {
    margin-left: 8.333333%;
    margin-right: 8.333333%;
  }
`;

export const ResultsContainer = styled.div.attrs({
  className: "w-6/6 mx-auto m-lg:w-full m-lg:px-15"
})`
  box-sizing: inherit;
`;

export const ResultsGrid = styled.div.attrs({
  className: "flex flex-wrap justify-center"
})`
`;

export const TopSectionLeftContainer = styled.div.attrs({
  className: "m-md:m-auto"
})`
  max-width: 280px;
  img {
    width: 100%;
    border-radius: 10px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const TopSectionRightContainer =  styled.div.attrs({
  className: "w-2/3 m-md:w-full"
})`
`;