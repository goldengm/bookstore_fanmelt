import React from 'react';
import styled from 'styled-components';
import { storiesOf  } from '@storybook/react';

storiesOf('Pages|Book/CustomImageButton', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Custom Image',
    () => {
      return (
        <div>
          <label> custom image button</label><br />
          <DownloadButton>
              <DownloadContainer>
                  <DownloadImage src="download-to-storage-drive.svg" />
                  <DownloadText>Custom Image</DownloadText>
              </DownloadContainer>
          </DownloadButton>
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  );

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
    width: 125px;
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