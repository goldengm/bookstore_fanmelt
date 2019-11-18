import React from 'react';
import { storiesOf  } from '@storybook/react';
import styled from 'styled-components';
import { RecommendedWrapper, RecommendedContainer, Select } from 'pages/featured.tsx';

storiesOf('Pages|Featured/RecommendedWrapper', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Recommened Select Box',
    () => {
      return (
        <div style={{ maxWidth: "300px" }} >
          <label> recommended select box </label><br />
            <RecommendedWrapper>
              <RecommendedContainer>
                <Select>
                  <option selected value="">
                    Recommended
                  </option>
                  <option value={10}>Price High to Low</option>
                  <option value={20}>Price Low to High</option>
                  <option value={30}>Alphabet A-Z</option>
                  <option value="">Response Time (fastest to slowest)</option>
                </Select>
              </RecommendedContainer>
            </RecommendedWrapper>
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )