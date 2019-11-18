import React from "react";
import styled from 'styled-components';
import { SocialIcon } from "react-social-icons";
import Button from "@material-ui/core/Button";

export const Footer = () => (
  <InfoBarContainer>
    <SocialButtons />
    <ApplyButton>Apply as talent</ApplyButton>
  </InfoBarContainer>
);

const InfoBarContainer = styled.div.attrs({ className: "px-4 py-6" })`
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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

const ApplyButton = styled(Button)`
  color: white;
  border: 1px solid white;
`;