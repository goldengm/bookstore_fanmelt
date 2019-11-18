import React from 'react';
import styled from 'styled-components'
import { storiesOf  } from '@storybook/react';
import { 
  CardListItem,
} from 'components/CardListItem/CardListItem';
import { ResultsGrid, BodyRow, ResultsContainer, BodyContainer, BodyWrapper } from 'pages/tjlavin';

const mockup = [{
    text: "A",
    title: "By Cubby for Brian",
    detail: "Details",
    src: "tjlavin_bottom.png",
},{
    text: "A",
    title: "By Cubby for Brian",
    detail: "Details",
    src: "tjlavin_bottom.png",
}]




storiesOf('Pages|tjlavin/CardListItem', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Item',
    () => {
      return (
        <div style={{display: 'flex'}}>
          <CardListItem text={mockup[0].text} title={mockup[0].title} detail={mockup[0].detail} src={mockup[0].src} />
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )
  .add(
    'List',
    () => {
      return (
        <>
          <ResultsGrid>
            {
              mockup.map((m, i) => {
                return <CardListItem text={m.text} title={m.title} detail={m.detail} src={m.src} key={i} />              
              })
            }
          </ResultsGrid>
        </>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )