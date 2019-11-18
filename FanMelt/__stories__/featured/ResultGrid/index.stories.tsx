import React from 'react';
import { storiesOf  } from '@storybook/react';
import styled from 'styled-components';
import { ResultsGrid, Image } from 'pages/featured.tsx';
import { results } from 'utils/data';

storiesOf('Pages|Featured/ResultsGrid', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Results Grid',
    () => {
    	return (
    		<div style={{ maxWidth: "1170px", margin: "0 auto" }}>
    			<ResultsGrid>
            {results.map((r, i) => (
              <GridImageWrapper key={i}>
                <GridImageContainer>
                  <Price>{r.price}</Price>
                  <ImageItem>
                    <img src={r.image} alt="image" />
                  </ImageItem>
                  <ImageContent>
                    <SmallTitle>{r.title}</SmallTitle>
                    <Title>{r.name}</Title>
                    <div style={{ display: "flex" }}>
                      {r.tags.length > 0 &&
                        r.tags.map((tag, i) => (
                          <SmallTitle key={i} bottom>
                            {tag}
                          </SmallTitle>
                        ))}
                    </div>
                  </ImageContent>
                </GridImageContainer>
              </GridImageWrapper>            ))}
          </ResultsGrid>
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

const Title = styled.h3`
  margin-top: 0;
  font-weight: 700;
  font-size: 25px;
  margin-right: 10px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
`;

const GridImageWrapper = styled.div.attrs({
  className: "lg:w-1/3 xl:w-1/4"
})`
  margin-bottom: 20px;
  min-height: 170px;
  max-height: 350px;
  padding-right: 5px !important;
  padding-left: 5px !important;
  min-width: 145px;

  @media (min-width: 1280px) {
    width: 24% !important;
  }

  @media (min-width: 1024px) {
    width: 31%;
  }

  @media (max-width: 1024px) {
    width: 31%;
  }

  @media (max-width: 500px) {
    width: 47% !important;
    min-height: auto;
    height: auto;
    min-width: auto;
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
  height: 350px;
  padding: 0 5px;


  @media (max-width: 500px) {
    height: auto;
  }
  &:hover {
    transform: translateY(-3px);
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
  height: 70%;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    position: relative;
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

const ImageContent = styled.div`
  height: 30%;
  width: 100%;
  padding: 10px 12px;
  @media (max-width: 768px) {
    .flex {
      display: none
    }
  }
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