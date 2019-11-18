import React from 'react';
import { storiesOf  } from '@storybook/react';
import styled from 'styled-components';
import { CategoryItem, CategoryContainer, CategoryTitle, Sepatator } from 'pages/featured.tsx';

const categories = [
  { name: "Featured", amount: 300 },
  { name: "Actors", amount: 322 },
  { name: "Athletes", amount: 300 },
  { name: "Actors", amount: 322 },
  { name: "Actors", amount: 322 },
  { name: "Actors", amount: 322 },
  { name: "Featured", amount: 300 },
  { name: "Actors", amount: 322 },
  { name: "Athletes", amount: 300 },
  { name: "Featured", amount: 300 },
  { name: "Actors", amount: 322 },
  { name: "Athletes", amount: 300 },
  { name: "Featured", amount: 300 },
  { name: "Actors", amount: 322 },
  { name: "Athletes", amount: 300 },
  { name: "Featured", amount: 300 },
  { name: "Actors", amount: 322 },
  { name: "Athletes", amount: 300 }
];

storiesOf('Pages|Featured/CategoryContainer', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'CategoryContainer',
    () => {
    	return (
    		<div>
    			<label> category container</label><br />
          <Left>
      			<CategoryContainer>
                <CategoryTitle>Categories</CategoryTitle>
                {categories.map((category, i) => {
                  const { name, amount } = category;
                  if (i === 8) {
                    return <Sepatator key={i} />;
                  }
                  return <CategoryItem key={i} name={name} amount={amount} style={{ maxWidth: '200px' }} />;
                })}
            </CategoryContainer>
          </Left>
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

const Left = styled.div`
  width: 16%;

  @media (max-width: 1024px) {
    width: 100%
  }
`