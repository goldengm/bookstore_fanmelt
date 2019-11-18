import React from 'react';
import { storiesOf  } from '@storybook/react';
import { Input } from 'pages/featured.tsx';

storiesOf('Pages|Featured/SearchBar/Input', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Default Input',
    () => {
    	return (
    		<div>
    			<label>Default Input PlaceHolder</label><br /><br />
          <Input placeholder="" />
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  ).add(
    'Input with PlaceHolder',
    () => {
      return (
        <div>
          <label>You can change PlaceHolder</label><br /><br />
          <Input placeholder="Try 'Brett Favre' or 'Real Housewives" />
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )