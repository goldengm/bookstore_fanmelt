import React from 'react';
import styled from 'styled-components'
import { storiesOf  } from '@storybook/react';


const categories = [
  "TV Hosts",
  "Reality TV",
  "Featured",
  "Extreme Sports",
  "MTV",
  "The Challenge",
  "BMX",
];

storiesOf('Pages|tjlavin/UserCategoryList', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Item',
    () => {
      return (
        <>
          <UserCatItem>{categories[0]}</UserCatItem>
        </>
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
          <UserCategoryList>
            {
              categories.map((m, i) => {
                return <UserCatItem key={i}>{m}</UserCatItem>             
              })
            }
          </UserCategoryList>
        </>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

const UserCategoryList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
`

const UserCatItem = styled.a`
    padding: 9px 18px;
    margin: 0 12px 7px 0;
    border-radius: 30px;
    display: inline-block;
    background-color: #f7f7f7;
    color: #4d4d4d;
    text-decoration; none;
    font-size: 18px;
    &:hover {
      background-color: #ececec;
    }
`