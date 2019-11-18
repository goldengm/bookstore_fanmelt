import styled from "styled-components";
import {NavBar} from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import {InputText} from "../components/InputText/InputText"
import { FormInput } from "../components/FormInput/FormInput"
import React from "react";

const Index = () => (
    <>
        <NavBar />
        <Body />
        <Footer />
    </>
);

export default Index;

const options = [
    { key: "twitter", value: "Twitter" },
    { key: "instagram", value: "Instagram" },
    { key: "youtube", value: "Youtube" },
    { key: "facebook", value: "Facebook" },
    { key: "Twitch", value: "twitch" },
    { key: "musically", value: "TikTok" },
    { key: "other", value: "Other" },
]

const Body = () => (
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
);
const SubmitBtn = styled.div.attrs({
    className: 'text-lg uppercase bg-transparent border-0 relative text-white py-100 px-21 font-semibold text-center whitespace-no-wrap align-middle cursor-pointer leading-normal'
})`
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    transition: all .4s;
    background-color: #fa005c;
    touch-action: manipulation;
    border-radius: 3px;

    &:hover {
        background-color: #7b002d;
    }
`
const InputWrapper = styled.div.attrs({
    className: 'w-full relative table border-separate'
})`
`
const RowLable = styled.label.attrs({
    className: 'text-xl font-semibold mb-0'
})`
`
const FormRowContent = styled.div.attrs({
    className: 'mb-15'
})`
`
const FormDesc = styled.div.attrs({
    className: 'mb-100'
})`
`
const FormTitle = styled.div.attrs({
    className: 'text-3xl mt-6 mb-3 font-bold'
})`
`
const BodyRowContent = styled.div.attrs({
    className: 'text-lg m-0 w-full px-15 text-4d md:w-6/12 md:p-0 md:ml-25-p'
})`
`
const BodyWrapper = styled.div.attrs({
    className: 'mt-0 pt-70'
})`
`;

const BodyContainer = styled.div.attrs({
    className: "container px-15 mx-auto w-750 m-md:w-full m-md:max-w-full xl:w-1170 lmd:970px"
})`
`;


const BodyRow = styled.div.attrs({
    className: '-mx-15'
})`
`;

const Select = styled.select.attrs({
    className: 'text-base border-0 rounded-none pl-0 bg-no-repeat leading-normal w-full py-600 pr-4 pl-0 bg-transparent h-38'
})`
    background-size: 13px;
    background-position: 100%;
    box-shadow: inset 0 -1px 0 #ddd;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:focus {
        box-shadow: inset 0 -2px 0 #337ab7;
        z-index: 3;
        outline: unset;
    }
`;