import React from 'react'
import { InputWrapper } from './Styled'

interface IProps {
    type: string;
    placeholder: string;
}

export const InputText = ({ type, placeholder}: IProps) => {
    return (
        <InputWrapper>
            <input type={type} placeholder={placeholder} className="text-lg"/>
        </InputWrapper>
    )
}
