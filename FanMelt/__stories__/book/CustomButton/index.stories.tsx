import React from 'react';
import { storiesOf  } from '@storybook/react';
import { CustomButton } from 'components/Button/CustomButton';

storiesOf('Pages|Book/CustomButton', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Default Button',
    () => {
    	return (
    		<div>
    			<label> default custom button</label><br />
          <label> background="" color="#337ab7"</label><br />
    			<CustomButton text="Default Button" padding="5px 10px" color="#337ab7" />
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  ).add(
    'BackgroundColor Changed Button',
    () => {
      return (
        <div>
          <label>background changed button</label><br />
          <label>bgColor="#fa005c"</label><br />
          <CustomButton text="bgColor Button" padding="5px 10px" bgColor="#fa005c" fontSize="18px"/>
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )
  .add(
    'Color Changed Button',
    () => {
      return (
        <div>
          <label> color changed button </label><br />
          <label> bgColor="#fa005c" color="white" </label><br />
          <CustomButton text="bgColor Button" padding="5px 10px" bgColor="#fa005c" color="white" fontSize="18px" />
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )
  .add(
    'Hovered Button',
    () => {
      return (
        <div>
          <label> hovered button</label><br />
          <label> hoverBG="#7b002d" hoverC="#fff" </label><br />
          <CustomButton text="bgColor Button" padding="5px 10px" bgColor="#fa005c" color="white" hoverBG="#7b002d" hoverC="#fff" fontSize="18px" />
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  );