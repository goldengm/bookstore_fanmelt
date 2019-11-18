import React from 'react';
import { storiesOf  } from '@storybook/react';
import { SearchWrapper, Input, SearchIconContainer, SearchIconItem } from 'pages/featured.tsx';

storiesOf('Pages|Featured/SearchBar', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'SearchBar',
    () => {
    	return (
    		<div>
    			<label>SearchBar</label><br /><br />
    			<SearchWrapper>
            <Input placeholder="Try 'Brett Favre' or 'Real Housewives" />
            <SearchIconContainer>
              <SearchIconItem fontSize="large" />
            </SearchIconContainer>
          </SearchWrapper>
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )