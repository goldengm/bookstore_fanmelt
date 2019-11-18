import React from 'react';
import styled from 'styled-components'
import { storiesOf  } from '@storybook/react';
import { ImageContent } from 'components/ImageContent/ImageContent.tsx';

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


storiesOf('Pages|Order/ImageContent', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'ImageContent',
    () => {
    	return (
    		<div style={{ width: "385px" }}> 
    			<RightContentRow>
              <ImageContainer>
                  <img src={imageContents[0].src} alt='image' />
              </ImageContainer>
              <RowTextContent>
                  {imageContents[0].text}
              </RowTextContent>
          </RightContentRow>
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

  .add(
    'ImageContent List',
    () => {
      return (
        <div style={{ width: "385px" }}>
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
        </div>
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
    display: flex;

    img {
        height: 30px;
        width: 30px;
        min-width: 30px;
        background: #f7f7f7;
        align-self: center;
}`;

const RightContentRow = styled.div`
    align-items: center;
    display: flex;
    margin-left: 15px;
    min-height: 54px;
    padding-bottom: 30px;
    color: #4d4d4d;
`;

const RowTextContent = styled.div`

`;
