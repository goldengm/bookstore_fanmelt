import React from 'react';
import { FormRowContent, RowLable } from './Styled';
import { InputText } from '../InputText/InputText';

interface IProps {
  text: string;
  placeholder: string;
}

export const FormInput = ({ text, placeholder }: IProps) => {
  return (
    <FormRowContent>
      <RowLable>{text}</RowLable>
      <InputText type="text" placeholder={placeholder} />
    </FormRowContent>
  )
}
