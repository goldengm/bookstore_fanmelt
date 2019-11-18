import React from 'react';
import { storiesOf  } from '@storybook/react';
import styled from 'styled-components'
import HeartIcon from "@material-ui/icons/FavoriteBorder";
import { CustomImageButton } from 'components/ImageButton/CustomImageButton.tsx';
import { CustomButton } from 'components/Button/CustomButton.tsx';

storiesOf('Pages|Book', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Book Page',
    () => {
      return (
        <BodyWrapper>
          <HeaderRow>
              <Header>
                  <HeaderTitle>Brian Baumgartner</HeaderTitle>
              </Header>
          </HeaderRow>
          <BodyContainer>
              <BodyRow>
                  <LeftCol>
                      <LeftColContainer>
                          <LeftColImage src="https://starboard-media.s3.amazonaws.com/v/no-wm-thumb-oTY5y0_fR-00001.jpg" alt="Video player preview" />
                          <VideoIcon src="https://d3el26csp1xekx.cloudfront.net/static/assets/video-cards-2.0/play.svg" />
                      </LeftColContainer>
                  </LeftCol>

                  <RightCol>
                      <RightColContainer>
                          <RightColContainerTitle>
                              For
                              <RightColContainerTitleStrong>Tanvi (pronounced "Thun-vee")</RightColContainerTitleStrong>
                              <Heart>
                                  <HeartImage />
                                  0
                              </Heart>
                          </RightColContainerTitle>
                          <DemoComment>
                              "Hilarious!"
                          </DemoComment>
                          <ButtonGroup>
                              <CustomButton 
                                  text="Share on Twitter" 
                                  color="#337ab7"
                                  bgColor=""
                                  fSize="14px"
                                  fWeight="400"
                                  padding="5px 10px"
                                  lSpaceing=""
                                  hoverC="#000"
                                  hoverBG=""
                              />
                              <CustomButton
                                  text="Share on FaceBook"
                                  color="#337ab7"
                                  bgColor=""
                                  fSize="14px"
                                  fWeight="400"
                                  padding="5px 10px"
                                  lSpaceing=""
                                  hoverC="#000"
                                  hoverBG=""
                              />
                              <DownloadButton>
                                  <DownloadContainer>
                                      <DownloadImage src="download-to-storage-drive.svg" />
                                      <DownloadText>Download Video</DownloadText>
                                  </DownloadContainer>
                              </DownloadButton>
                          </ButtonGroup>
                          <ConfirmationTalentLink>
                              <ConfirmationContainer>
                                  <ConfirmationImageLink href="/brianbaumgartner">
                                      <ConfirmationImage src="https://d31wcbk3iidrjq.cloudfront.net/static/user/P7x2KzmoD.jpg?w=180&h=180&q=80)" />    
                                  </ConfirmationImageLink>
                                  <ConfirmationInformation>
                                      <NameLink href="/brianbaumgartner">
                                          Brian Baumgartner
                                      </NameLink>
                                      <Office>
                                          Actor - The Office
                                      </Office>
                                      <CustomButton 
                                          text="Book Brian Baumgartner" 
                                          color="#fff"
                                          bgColor="#fa005c"
                                          fSize="18px"
                                          fWeight="600"
                                          padding="5px 18px"
                                          lSpaceing=".5px"
                                          hoverC="#fff"
                                          hoverBG="#7b002d"
                                      />
                                  </ConfirmationInformation>
                              </ConfirmationContainer>
                          </ConfirmationTalentLink>
                      </RightColContainer>
                  </RightCol>
              </BodyRow>
          </BodyContainer>
      </BodyWrapper>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  );


const HeaderRow = styled.div `
    
`;

const BodyWrapper = styled.div`
  margin-top: 0;
  padding-top: 70px;
  -webkit-font-smoothing: antialiased;
    letter-spacing: .1px;
    font-size: 18px;
    background: #ffffff;
`;

const BodyContainer = styled.div`
    @media (min-width: 1280px){
        max-width: 1170px;
    }
    @media (min-width: 768px) {
        max-width: 100%;
        margin-top: 160px;
        padding: 0px;
    }
`;

const BodyRow = styled.div`
    display: flex;
    color: #4d4d4d;
    padding-left: 16.67%;
    padding-right: 16.67%;

    @media (max-width: 991px) {
        padding-left: 0;
        padding-right: 0;
    }

    @media (max-width: 767px) {
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 15px;
        flex-direction: column;
    }
`;

const Header = styled.div`
    background: #000000;
    position: absolute;
    width: 100%;
    display: none;
    padding-top: 70px;
    overflow: hidden;

    @media (min-width: 768px) {
        margin-left: 0;
        margin-right: 0;
        text-align: center;
        padding-left: 15px;
        padding-right: 15px;
        height: 500px;
        display: block;
    }    
`;

const HeaderTitle = styled.span`
    font-family: fresh;
    font-size: 175px;
    line-height: 1;
    color: #fff;
    letter-spacing: -10px;
`;

const LeftCol = styled.div`    
    position: relative;
    background-color: #ffffff;
    height: 100%;
    border-radius: 10px 0 10px 10px;

    @media (min-width: 768px) {
        width: 50%;
        border-radius: 10px;
    }
`;

const LeftColContainer = styled.div`
    position: relative;
    padding-bottom: 15px;
`; 

const LeftColImage = styled.img`
    min-height: 0;
    max-height: 1200px;
    border-radius: 10px 0 10px 10px;
    width: 100%;
    position: relative;

    @media (max-width: 767px) {
        border-radius: 10px;
    }
`;

const VideoIcon = styled.img`
    position: absolute;
    bottom: 25px;
    left: 15px;
    cursor: pointer;
`;

const RightCol = styled.div`
    position: relative;

    @media (min-width: 768px) {
        width: 50%;
    }
`;

const RightColContainer = styled.div`
    background-color: #ffffff;
    height: 100%;
    border-radius: 0 10px 10px 0;
    padding: 20px 15px 0;

    @media (max-width: 767px) {
        padding: 20px 0 0 0;
    }
`;

const RightColContainerTitle = styled.p`
    font-size: 48px;
    line-height: 48px;
    padding-top: 20px;
    padding-bottom: 24px;
`;

const RightColContainerTitleStrong = styled.strong`
    letter-spacing: 1.1px;
    margin-left: 12px;
`;

const Heart = styled.span`
    font-size: 26px;
    vertical-align: middle;
    white-space: nowrap;
`;

const HeartImage = styled(HeartIcon)`
    color: #fa005c;
    font-size: 32px;
    margin-top: -10px;
    margin-left: 25px;
    margin-right: 8px;
`;

const DemoComment = styled.p`
    font-size: 30px;
    font-style: italic;
    line-height: 1.5em;
    overflow-x: hidden;
    text-overflow: ellipsis;
    border-left: 4px solid #d538ff;
    padding-left: 8px;
    margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
    margin-bottom: 24px;
`;

const ConfirmationTalentLink = styled.div`
    border-top: 1px solid #eee;
    padding-top: 24px;
    padding-bottom: 48px;
`;

const ConfirmationContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ConfirmationImageLink = styled.a`
`;

const ConfirmationImage = styled.img`
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin-right: 20px;
    vertical-align: top;
`;

const ConfirmationInformation = styled.div`
    padding-top: 10px;
`;

const NameLink = styled.a`
    margin-bottom: 6px;
    margin-top: 15px;
    color: #000;
    font-size: 25px;
    font-weight: 700;

    &:hover {
        text-decoration: underline;
        text-decoration-color: #337ab7;
    }
`;

const Office = styled.p`
    color: #999;
    margin-bottom: 3px;
    margin-top: 6px;
`;

const DownloadButton = styled.a`
    background: transparent;
    text-transform: uppercase;
    border: none;
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    transition: all .4s;
    padding: 5px 10px;
    line-height: 1.5;
    border-radius: 3px;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    color: #337ab7;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 145px;
    font-size: 0.875rem;    

    @media (max-width: 767px) {
        display: none;
    }

    &:hover, &:focus {
        color: black;
    }
`;

const DownloadContainer = styled.div`
    display: flex;
    align-items: center;
`;

const DownloadImage = styled.img.attrs({ width: 15, height: 15 })`
    $:hover {
        color: black;
    }
`;

const DownloadText = styled.span`
    margin-left: 8px;
    $:hover {
        color: black;
    }
`;