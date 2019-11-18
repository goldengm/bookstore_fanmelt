import React from 'react';
import { storiesOf  } from '@storybook/react';
import styled from 'styled-components';

const options = [
    { key: "twitter", value: "Twitter" },
    { key: "instagram", value: "Instagram" },
    { key: "youtube", value: "Youtube" },
    { key: "facebook", value: "Facebook" },
    { key: "Twitch", value: "twitch" },
    { key: "musically", value: "TikTok" },
    { key: "other", value: "Other" },
]

storiesOf('Pages|enroll', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'enroll page',
    () => {
      return (
        <BodyWrapper>
            <BodyContainer>
                <BodyRow>
                    <BodyRowContent>
                        <FormTitle>
                            Apply to join Cameo
                        </FormTitle>
                        <FormDesc>
                            If you have fans and want to join Cameo as talent, you can enroll here and we'll be in touch.
                        </FormDesc>
                        <FormInput text="Your name" placeholder="Michael Jordan" />
                        <FormInput text="Email" placeholder="you@example.com" />
                        <FormInput text="Phone number (never shared)" placeholder="555-555-5555" />
                        <FormRowContent>
                            <RowLable>Where can we find you?</RowLable>
                            <InputWrapper>
                                <Select type="Number" defaultValue="twitter" placeholder="twitter" >
                                    {
                                        options.map((option, index) => {
                                            return <option value={option.key} key={index}>{option.value}</option>
                                        })
                                    }
                                </Select>
                            </InputWrapper>
                        </FormRowContent>
                        <FormInput text="Your handle" placeholder="@jimmybuffet" />
                        <FormInput text="How many followers do you have?" placeholder="400k" />
                        <FormRowContent>
                            <SubmitBtn>
                                Submit
                            </SubmitBtn>
                        </FormRowContent>
                    </BodyRowContent>
                </BodyRow>
            </BodyContainer>
        </BodyWrapper>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

interface IProps {
  text: string;
  placeholder: string;
}

const FormInput = ({ text, placeholder }: IProps) => {
  return (
    <FormRowContent>
      <RowLable>{text}</RowLable>
      <InputWrapper>
            <input type="text" placeholder={placeholder}/>
        </InputWrapper>
    </FormRowContent>
  )
}



export const SubmitBtn = styled.div`
    background: transparent;
    text-transform: uppercase;
    border: none;
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    transition: all .4s;
    position: relative;
    color: #fff;
    background-color: #fa005c!important;
    padding: 10px 21px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    line-height: 1.5;
    border-radius: 3px;

    &:hover {
        background-color: #7b002d !important;
    }
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
        font-size: 18px;
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
export const RowLable = styled.label`
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 0;
`
export const FormRowContent = styled.div`
    margin-bottom: 15px;
`
export const FormDesc = styled.div`
    margin-bottom: 10px;
`
export const FormTitle = styled.div`
    margin-top: 24px;
    margin-bottom: 12px;
    font-size: 30px;
    font-weight: 700;
`
export const BodyRowContent = styled.div`
    margin: 0px;
    width: 100%;
    color: #4d4d4d;
    font-size: 18px;
    padding-left: 15px;
    padding-right: 15px;
    @media (min-width: 768px) {
        margin-left: 25%;
        width: 50%;
        padding: 0px;
    }
`
export const BodyWrapper = styled.div`
  margin-top: 0;
  padding-top: 70px;
`;

export const BodyContainer = styled.div.attrs({ className: "container" })`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 750px;
  @media (min-width: 992px){
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;


export const BodyRow = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`;

export const Select = styled.select`
    border: 0;
    border-radius: 0;
    padding-left: 0;
    background-size: 13px;
    background-repeat: no-repeat;
    background-position: 100%;
    box-shadow: inset 0 -1px 0 #ddd;
    font-size: 16px;
    line-height: 1.5;
    width: 100%;
    height: 38px;
    padding: 6px 16px;
    padding-left: 0px;
    background-color: transparent;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:focus {
        box-shadow: inset 0 -2px 0 #337ab7;
        z-index: 3;
        outline: unset;
    }
`;