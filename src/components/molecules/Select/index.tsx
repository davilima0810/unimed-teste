import React from 'react';

import * as S from './styles';

import { InputHTMLAttributes, useEffect, useState } from "react";

type AsyncSimpleSelectOption = {
  label: string
  value: any
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  assistiveText?: string;
  disabled?: boolean;
  iconLeft?: any;
  listProps?: AsyncSimpleSelectOption[],

  label?: string;
  required?: boolean;
  className?: string;
  type?: "number" | "text" | "password" | "time";
  iconPassword?: boolean;
  onClickInIconRight?: boolean;
  value?: string;
  maxLength?: number;
  initialValue?: any;

  handleOnChange?: (value: any) => any;
  handleOnFocus?: () => any;
  handleOnBlur?: () => any;
  iconRight?: any;
  onClickIconRight?: () => void;
  onClickIconLeft?: () => void;
  isSelect?: boolean;
  isError?: boolean;
}

const Select = ({
  label = "",
  listProps = [],
  assistiveText,
  iconLeft = "",
  iconPassword = false,
  value = "",
  handleOnBlur,
  handleOnFocus,
  isError,
  required,
  className,
  iconRight = "",
  onClickIconLeft,
  onClickIconRight,
  isSelect,
  disabled = false,
  initialValue,
  maxLength,
  ...rest
}: InputProps) => {
  return (
    <S.Container>
      <S.Title>{label}</S.Title>
      <S.InputMaterial placeholder={rest.placeholder}>
        {listProps?.map((item)=>{
          return (
            <option
              key={item?.value}
              value={item?.value}
              >
                {item?.label}
            </option>
          )
        })}
      </S.InputMaterial>
    </S.Container>
  );
}

export default Select;