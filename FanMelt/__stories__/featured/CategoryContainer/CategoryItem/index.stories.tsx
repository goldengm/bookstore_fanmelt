import React from 'react';
import { storiesOf  } from '@storybook/react';
import { CategoryItem } from 'pages/featured.tsx';

storiesOf('Pages|Featured/CategoryContainer/CategoryItem', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Default CategoryItem',
    () => {
    	return (
    		<div style={{ maxWidth: "200px" }}>
    			<label> default category item</label><br />
    			<CategoryItem name="Featured" amount="300" />
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )