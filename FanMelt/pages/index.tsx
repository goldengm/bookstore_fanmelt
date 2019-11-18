import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { useState, useRef, useLayoutEffect } from "react";
import Fab from "@material-ui/core/Fab";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { SocialIcon } from "react-social-icons";
import {NavBar} from "../components/NavBar/NavBar";

const Index = () => (
  <>
    <NavBar />
    <Hero />
    <HowItWorks />
    <FeaturedVideos />
    <ReactionVideos />
    <InfoBar />
  </>
);

export default Index;

const InfoBar = () => (
  <InfoBarContainer>
    <SocialButtons />
    <ApplyButton>Apply as talent</ApplyButton>
  </InfoBarContainer>
);

const Hero = () => {
  const { positionElementRef, position: heroBottom } = usePosition();

  return (
    <>
      <HeroContainer>
        <InfoBar />
        <ContentContainer>
          <Title className="md:text-4xl text-3xl leading-tight font-bold text-center">
            Book personalized video shoutouts from your favorite celebrities
          </Title>
          <Button variant="contained" color="primary" size="large">
            Browse Celebrities
          </Button>
        </ContentContainer>
        <ScrollButtonContainer>
          <ScrollButton
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<ArrowDownwardIcon />}
            onClick={() =>
              window.scrollTo({ behavior: "smooth", top: heroBottom - 64 })
            }
          >
            Learn More
          </ScrollButton>
        </ScrollButtonContainer>
        <HeroBackground>
          <Overlay />
          {[1, 2, 3].map(num => (
            <HeroPersonImage personNumber={num} />
          ))}
        </HeroBackground>
      </HeroContainer>
      <span id="hero-bottom" ref={positionElementRef} />
    </>
  );
};

const SocialButtons = () => (
  <div className="flex flex-row">
    <SocialIcon
      url="https://www.facebook.com/fanmelt"
      bgColor="white"
      style={{ height: 35, width: 35, marginRight: "10px" }}
    />
    <SocialIcon
      url="https://www.youtube.com/channel/UCinbHCC4oFD8uU8vMdR3olQ"
      bgColor="white"
      style={{ height: 35, width: 35, marginRight: "10px" }}
    />
    <SocialIcon
      url="https://twitter.com/fan_melt"
      bgColor="white"
      style={{ height: 35, width: 35, marginRight: "10px" }}
    />
    <SocialIcon
      url="https://www.instagram.com/fanmelt"
      bgColor="white"
      style={{ height: 35, width: 35, marginRight: "10px" }}
    />
  </div>
);

const HowItWorks = () => (
  <HowItWorksContainer>
    <HowItWorksTitle>How It Works</HowItWorksTitle>
    <StepsContainer>
      <Steps>
        <Step>
          <StepImageContainer>
            <StepImage stepNum={1} />
          </StepImageContainer>
          <StepDescription>1. Pick a celebrity</StepDescription>
        </Step>
        <Step>
          <StepImageContainer>
            <StepImage stepNum={2} />
          </StepImageContainer>
          <StepDescription>2. Request a video shoutout</StepDescription>
        </Step>
        <Step>
          <StepImageContainer>
            <StepImage stepNum={3} />
          </StepImageContainer>
          <StepDescription>3. Receive your video</StepDescription>
        </Step>
      </Steps>
    </StepsContainer>
  </HowItWorksContainer>
);

const FeaturedVideos = () => (
  <FeaturedVideosContainer>
    <FeaturedVideosTitle>Featured Videos</FeaturedVideosTitle>
    <FeaturedVideosListContainer>
      <FeaturedVideosList>
        <FeaturedVideoContainer>
          <FeaturedVideo featuredVideoNum={1}>
            <PlayButton>
              <PlayArrowIcon />
            </PlayButton>
          </FeaturedVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <FeaturedVideo featuredVideoNum={2}>
            <PlayButton>
              <PlayArrowIcon />
            </PlayButton>
          </FeaturedVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <FeaturedVideo featuredVideoNum={3}>
            <PlayButton>
              <PlayArrowIcon />
            </PlayButton>
          </FeaturedVideo>
        </FeaturedVideoContainer>
      </FeaturedVideosList>
    </FeaturedVideosListContainer>
  </FeaturedVideosContainer>
);

const ReactionVideos = () => (
  <ReactionVideosContainer>
    <ReactionVideosTitle>Reaction Videos</ReactionVideosTitle>
    <ReactionTagsContainer>
      <h3 className="text-xl mb-2"> Tag #fanmelt to get featured </h3>
      <SocialButtons />
    </ReactionTagsContainer>
    <ReactionVideosListContainer>
      <ReactionVideosList>
        <FeaturedVideoContainer>
          <ReactionVideo reactionVideoNum={1}>
            <ReactionPlayButton>
              <PlayArrowIcon />
            </ReactionPlayButton>
          </ReactionVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <ReactionVideo reactionVideoNum={2}>
            <ReactionPlayButton>
              <PlayArrowIcon />
            </ReactionPlayButton>
          </ReactionVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <ReactionVideo reactionVideoNum={3}>
            <ReactionPlayButton>
              <PlayArrowIcon />
            </ReactionPlayButton>
          </ReactionVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <ReactionVideo reactionVideoNum={4}>
            <ReactionPlayButton>
              <PlayArrowIcon />
            </ReactionPlayButton>
          </ReactionVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <ReactionVideo reactionVideoNum={5}>
            <ReactionPlayButton>
              <PlayArrowIcon />
            </ReactionPlayButton>
          </ReactionVideo>
        </FeaturedVideoContainer>

        <FeaturedVideoContainer>
          <ReactionVideo reactionVideoNum={6}>
            <ReactionPlayButton>
              <PlayArrowIcon />
            </ReactionPlayButton>
          </ReactionVideo>
        </FeaturedVideoContainer>
      </ReactionVideosList>
    </ReactionVideosListContainer>
  </ReactionVideosContainer>
);

const FlatAppBar = styled(AppBar)`
  box-shadow: none;
`;

const LogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img.attrs({ src: "/logo-cropped.png" })`
  max-height: 50px;
  margin: 0;
`;

const HeroContainer = styled.div`
  @media (min-width: 600px) {
    margin-top: 64px;
    height: calc(100vh - 64px);
  }
  margin-top: 50px;
  height: calc(100vh - 50px);
  width: 100vw;
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: white;
`;

const HeroBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: -1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ScrollButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScrollButton = styled(Button)`
  color: white;
  width: 100%;
  background-color: #312f30;
  :hover {
    background-color: #312f30;
  }
`;

const HeroPersonImage = styled.div`
  ${({ personNumber }) => `
        background-image: url(/hero-person-${personNumber}.jpg);
        background-position: center;
        background-size: cover;
    `}
  min-height:30px;
  min-width: 30px;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.6);
`;

const Title = styled.h1`
  max-width: 30ch;
  margin: 1ch;
`;

const usePosition = () => {
  const positionElementRef = useRef();
  const [position, setPosition] = useState(0);

  function updatePosition() {
    if (positionElementRef.current) {
      const element: any = positionElementRef.current;
      const { top } = element.getBoundingClientRect();
      setPosition(window.pageYOffset + top);
    }
  }

  useLayoutEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return { positionElementRef, position };
};

const InfoBarContainer = styled.div.attrs({ className: "px-4 py-6" })`
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ApplyButton = styled(Button)`
  color: white;
  border: 1px solid white;
`;

const HowItWorksContainer = styled.div.attrs({ className: "p-10" })`
  color: white;
  background-color: #312f30;
  min-height: 50vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const StepsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Steps = styled.ol`
  display: grid;
  width: 100%;
  max-width: 1024px;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const StepImage = styled.div.attrs({ className: "shadow-2xl" })`
  background-color: white;
  height: 30vh;
  width: 30vh;
  border-radius: 100%;
  margin: 0 auto;
  border: 2px solid white;
  background-image: url(/homepage-step-${props => props.stepNum}.jpg);
  background-size: cover;
  background-position: center;
`;

const StepImageContainer = styled.div`
  width: 100%;
`;

const Step = styled.li.attrs({ className: "text-xl rounded-full" })`
  display: grid;
  text-align: center;
  grid-template-rows: 1fr auto;
  @media (max-width: 1024px) {
    margin-bottom: 60px;
    :last-child {
      margin-bottom: 0;
    }
  }
`;

const StepDescription = styled.p.attrs({ className: "mt-6" })`
  min-height: 20px;
  font-weight: medium;
`;

const HowItWorksTitle = styled.h2.attrs({
  className: "text-3xl text-center font-bold mb-10"
})``;

const FeaturedVideosTitle = styled.h1.attrs({
  className: "text-3xl text-center font-bold mb-10"
})``;

const FeaturedVideosContainer = styled.div.attrs({ className: "p-10" })`
  color: white;
  background-color: #8a59d9;
  min-height: 75vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const FeaturedVideosListContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeaturedVideosList = styled.ul`
  max-width: 1024px;
  height: 100%;
  width: 100%;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FeaturedVideo = styled.div.attrs({ className: "shadow-lg rounded" })`
  background-color: white;
  max-width: 300px;
  height: 100%;
  width: 100%;
  min-height: 300px;
  background-image: url(/featured-video-${props => props.featuredVideoNum}.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  :hover {
    cursor: pointer;
  }
`;

const FeaturedVideoContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-height: 300px;
  margin-bottom: 20px;
`;

const PlayButton = styled(Fab).attrs({
  color: "primary",
  variant: "contained"
})`
  position: absolute;
  height: 50px;
  width: 50px;
  bottom: 10px;
  right: 10px;
  border-radius: 100%;
`;

const ReactionVideosContainer = styled.div.attrs({ className: "p-10" })`
  color: white;
  background-color: #596dd9;
  min-height: 75vh;
  display: grid;
  grid-template-rows: auto 1fr;
  text-align: center;
`;

const ReactionVideosTitle = styled.h1.attrs({
  className: "text-3xl text-center font-bold"
})``;

const ReactionVideosListContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReactionTagsContainer = styled.div.attrs({ className: "mb-10" })`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ReactionVideosList = styled.ul`
  max-width: 1024px;
  height: 100%;
  width: 100%;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 20px;
    max-width: 950px;
  }
  @media (max-width: 1024px) and (min-width: 700px) {
    display: grid;
    max-width: 640px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 20px;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ReactionVideo = styled.div.attrs({ className: "shadow-lg rounded" })`
  background-color: white;
  max-width: 300px;
  height: 100%;
  width: 100%;
  min-height: 300px;
  background-image: url(/reaction-video-${props => props.reactionVideoNum}.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  :hover {
    cursor: pointer;
  }
`;

const ReactionPlayButton = styled(PlayButton)`
  background-color: rgb(89, 109, 217);
  :hover {
    background-color: #3f4d9c;
  }
`;
