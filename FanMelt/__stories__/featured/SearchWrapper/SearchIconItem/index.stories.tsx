import React from 'react';
import { storiesOf  } from '@storybook/react';
import { SearchIconItem } from 'pages/featured.tsx';

storiesOf('Pages|Featured/SearchBar/SearchIcon', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Default Search Icon',
    () => {
    	return (
    		<div>
    			<label>Default Search Icon</label><br /><br />
          <SearchIconItem fontSize="" />
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  ).add(
    'Large Search Icon',
    () => {
      return (
        <div>
          <label>Large Search Icon</label><br /><br />
          <SearchIconItem fontSize="Large" />
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  ).add(
    'Small Search Icon',
    () => {
      return (
        <div>
          <label>Small Search Icon</label><br /><br />
          <SearchIconItem fontSize="Small" />
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )