import React from 'react';
import { storiesOf  } from '@storybook/react';
import { CategoryLinkName } from 'pages/featured.tsx';

storiesOf('Pages|Featured/CategoryContainer/CategoryItem/CategoryLinkName', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'CategoryLinkName',
    () => {
    	return (
    		<div>
    			<label> you can change category link name</label><br />
    			<CategoryLinkName>Featured</CategoryLinkName>
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )