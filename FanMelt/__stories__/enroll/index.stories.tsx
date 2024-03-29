import React from 'react';
import { storiesOf  } from '@storybook/react';
import styled from 'styled-components';
import { InputText } from 'components/InputText/InputText';

const options = [
    { text: "Your name", placeholder: "Michael Jordan" },
    { text: "Email", placeholder: "you@example.com" },
]

storiesOf('Pages|enroll/FormInput', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'FormInput',
    () => {
    	return (
    		<div>
          <FormRowContent>
            <RowLable>{options[0].text}</RowLable>
            <InputWrapper>
                <input type="text" placeholder={options[0].placeholder}/>
            </InputWrapper>
          </FormRowContent>
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )
  .add(
    'FormInput List',
    () => {
      return (
        <div>
          {
            options.map((option, i) => {
              return <FormRowContent>
                        <RowLable>{option.text}</RowLable>
                        <InputWrapper>
                            <input type="text" placeholder={option.placeholder}/>
                        </InputWrapper>
                      </FormRowContent>
            })
          }
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

export const FormRowContent = styled.div`
    margin-bottom: 15px;
`;

export const RowLable = styled.label`
    font-weight: 600;
    margin-bottom: 0;
    font-size: 1.25rem;
`

export const InputWrapper = styled.div`
    width: 100%;
    position: relative;
    display: table;
    border-collapse: separate;
    
    input {
        padding: 0;
        border: none;
        border-radius: 0;
        line-height: 1.3;
        box-shadow: inset 0 -1px 0 #ddd;
        display: table-cell;
        position: relative;
        z-index: 2;
        float: left;
        width: 100%;
        margin-bottom: 0;
        height: 38px;
        background-color: transparent;
        background-image: none;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        font-size: 1.125rem;
        &:focus {
            box-shadow: inset 0 -2px 0 #337ab7;
            z-index: 3;
            outline: unset;
        }
        &::placeholder{
          color: #ddd;
        }
    }
`