import React from 'react';
import { storiesOf  } from '@storybook/react';
import { CategoryLinkAmount } from 'pages/featured.tsx';

storiesOf('Pages|Featured/CategoryContainer/CategoryItem/CategoryLinkAmount', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'CategoryLinkAmount',
    () => {
    	return (
    		<div>
    			<label> you can change category link amount</label><br />
    			<CategoryLinkAmount>20</CategoryLinkAmount>
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )