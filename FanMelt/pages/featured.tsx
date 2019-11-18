import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { Footer } from "../components/Footer/Footer";
import {NavBar} from "../components/NavBar/NavBar";

import { results, categories } from "../utils/data";

const Index = () => (
  <>
    <NavBar />
    <Body />
    <Footer />
  </>
);

export default Index;

const options = [
  { value: "", text: "Recommended" },
  { value: "10", text: "Price High to Low" },
  { value: "20", text: "Price Low to High" },
  { value: "30", text: "Alphabet A-Z" },
  { value: "", text: "Response Time (fastest to slowest)" },
];

const Body = () => (
  <BodyWrapper>
    <BodyContainer>
      <BodyRow>
        <SearchContainer>
          <SearchWrapper>
            <Input placeholder="Try 'Brett Favre' or 'Real Housewives" />
            <SearchIconContainer>
              <SearchIconItem fontSize="large" />
            </SearchIconContainer>
          </SearchWrapper>
        </SearchContainer>
      </BodyRow>
      <BodyRow>
        <CategoryContainer>
          <CategoryTitle>Categories</CategoryTitle>
          {categories.map((category, i) => {
            const { name, amount } = category;
            if (i === 8) {
              return <Sepatator key={i} />;
            }
            return <CategoryItem key={i} name={name} amount={amount} />;
          })}
        </CategoryContainer>
        <ResultsContainer>
          <RecommendedWrapper>
            <RecommendedContainer>
              <Select>
                {
                  options.map((option, index) => {
                    return <option key={index} value={option.value}>{option.text}</option>
                  })
                }
              </Select>
            </RecommendedContainer>
          </RecommendedWrapper>
          <ResultsGrid>
            {results.map((item, i) => (
              <Image
                key={i}
                price={item.price}
                image={item.image}
                title={item.title}
                name={item.name}
                tags={item.tags}
              />
            ))}
          </ResultsGrid>
        </ResultsContainer>
      </BodyRow>
    </BodyContainer>
  </BodyWrapper>
);

export const BodyWrapper = styled.div.attrs({
  className: 'mt-0 pt-70'
})`
`;

export const BodyContainer = styled.div.attrs({
  className: "container text-lg px-15 mx-auto"
})`
`;

export const Title = styled.h3.attrs({
  className: "mt-0 font-bold mr-100 block overflow-hidden whitespace-no-wrap"
})`
  font-size: 1.5625rem;
  text-overflow: ellipsis;
`;

export const CategoryTitle = styled.h3.attrs({
  className: 'mt-0 font-bold mr-100 m-lg:hidden'
})`
  font-size: 1.5625rem;
`;

export const BodyRow = styled.div.attrs({
  className: '-mx-15 flex px-15 m-lg:flex-col'
})`
  min-height: 1px;
`;

export const SearchContainer = styled.div.attrs({
  className: 'w-full pb-4 mt-6 relative'
})`
`;

export const SearchWrapper = styled.div.attrs({
  className: 'mb-15 bg-white border border-solid relative'
})`
  box-shadow: 0 1px 13px -4px hsla(0, 0%, 58%, 0.26);
  border-color: hsla(0, 0%, 59.2%, 0.15);
`;

export const Input = styled(TextField).attrs({
  className: "text-2xl w-full"
})`
  input {
    &:focus {
      box-shadow: inset 0 -2px 0 #337ab7;
    }
    line-height: 1.3;
    font-size: 1.5rem;
    width: 100%;
    height: 30px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    padding: 26px 0 26px 56px;
  }
`;
export const SearchIconContainer = styled.div.attrs({
  className: 'absolute'
})`
  left: 15px;
  top: 20px;
  height: 40px;
`;

export const SearchIconItem = styled(SearchIcon).attrs({
  className: 'h-full'
})`
  color: #fa005c;
`;

export const CategoryContainer = styled.div.attrs({
  className: "w-1/6 sm:w-1/6 md:w-2/6 lg:w-1/6 xl:w-1/6 pb-4 mt-13 m-lg:flex m-lg:relative m-lg:pt-3 m-lg:pb-0 m-lg:overflow-x-scroll m-lg:whitespace-no-wrap m-lg:w-full"
})`

  @media (max-width: 1024px) {
    border-radius: 4px;
  }
`;
export const Select = styled.select.attrs({
  className: "text-base border-0 rounded-none appearance-none w-full py-600 px-4 leading-normal bg-transparent"
})`
  height: 38px;
  box-shadow: inset 0 -1px 0 #ddd;
`;
export const ResultsContainer = styled.div.attrs({
  className: "w-5/6 mx-auto m-lg:w-full"
})`
`;

export const RecommendedWrapper = styled.div.attrs({
  className: "mb-4"
})`
`;

export const RecommendedContainer = styled.div.attrs({
  className: "w-1/3 ml-auto relative m-md:w-full"
})`

  &:after {
    content: "";
    position: absolute;
    transform: translateY(-50%);
    top: 20px;
    right: 10px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
  }
`;

export const ResultsGrid = styled.div.attrs({
  className: 'flex flex-wrap'
})`
`;

export const Sepatator = styled.div.attrs({
  className: 'border-l-0 border-b border-solid'
})`
  height: 1px;
  width: 90%;
  border-bottom: 1px solid #ececec;
  margin: 16px 0 24px 5%;
`;

export const CategoryItem = ({ name, amount }) => (
  <CategoryLink href="#">
    <CategoryLinkName>{name}</CategoryLinkName>
    <CategoryLinkAmount>({amount})</CategoryLinkAmount>
  </CategoryLink>
);

export const CategoryLink = styled.a.attrs({
  className: "w-full py-900 px-180 mt-0 mr-3 ml-0 mb-700 inline-block no-underline bg-f7 text-4d first:bg-fa active:bg-fa hover:bg-ec"
})`
  transition: all 0.2s;

  &:nth-of-type(1) {
    span {
      color: #fff;
    }
  }
  border-radius: 30px;
  box-sizing: border-box;
`;

export const CategoryLinkName = styled.span.attrs({
  className: 'truncate mr-300 text-4d '
})`
`;

export const CategoryLinkAmount = styled.span.attrs({
  className: ''
})`
  color: #a1a1a1;
`;

export const Image = ({ price, image, title, name, tags }) => (
  <GridImageWrapper>
    <GridImageContainer>
      <Price>{price}</Price>
      <ImageItem>
        <img src={image} alt="image" />
      </ImageItem>
      <ImageContent>
        <SmallTitle>{title}</SmallTitle>
        <Title>{name}</Title>
        <div className="flex m-md:hidden">
          {tags.length > 0 &&
            tags.map((tag, i) => (
              <SmallTitle key={i} bottom>
                {tag}
              </SmallTitle>
            ))}
        </div>
      </ImageContent>
    </GridImageContainer>
  </GridImageWrapper>
);

export const GridImageWrapper = styled.div.attrs({
  className: "lg:w-1/3 xl:w-1/4 mb-5 px-500 mb-5 xl:w-3/12 lg:w-4/12  "
})`
  min-height: 170px;
  max-height: 350px;
  min-width: 145px;

  @media (max-width: 500px) {
    width: 50%;
    min-height: auto;
    height: auto;
    min-width: auto;
  }
`;

export const GridImageContainer = styled.div.attrs({
  className: 'relative bg-cover bg-white overflow-hidden h-full'
})`
  box-shadow: 4px 4px 17px hsla(0, 0%, 85.9%, 0.5);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 5px;

  @media (max-width: 500px) {
    height: auto;
  }
  &:hover {
    transform: translateY(-3px);
  }
`;

export const Price = styled.span.attrs({
  className: "lg:text-base text-sm text-white font-semibold absolute"
})`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 1px 14px;
  right: 11px;
  top: 11px;
`;

export const ImageItem = styled.div.attrs({
  className: "w-full m-md:relative w-full"
})`
  background: #eee;
  height: 70%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 60% 50%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
`;

export const ImageContent = styled.div.attrs({
  className: 'w-full py-100 px-3'
})`
  height: 30%;
`;

export const SmallTitle = styled.a.attrs({
  className: 'block overflow-hidden whitespace-no-wrap cursor-pointer'
})`
  color: #6c6c6c;
  font-size: 0.6875rem;
  text-overflow: ellipsis;

  &:after {
    font-size: 0.8125rem;
    content: "•";
    padding: 0 3px;
    display: ${props => (props.bottom ? "inline-block" : "none")};
  }

  &:hover {
    text-decoration: ${props => (props.bottom ? "underline" : null)};
  }
`;

export const FlatAppBar = styled(AppBar).attrs({
  className: 'shadow-none'
})`
`;

export const LogoContainer = styled.div.attrs({
  className: 'flex flex-grow items-center justify-start'
})`
`;

export const Logo = styled.img.attrs({ 
  src: "/logo-cropped.png",
  className: 'm-0'
})`
  max-height: 50px;
`;
