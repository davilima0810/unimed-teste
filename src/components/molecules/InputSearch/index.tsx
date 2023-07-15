import React from 'react';

import * as S from './styles';

import { InputHTMLAttributes, useEffect, useState } from "react";
import { ReactSVG } from 'react-svg';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  assistiveText?: string;
  disabled?: boolean;
  iconLeft?: any;

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
  onClickIconRight?: () => void;
  onClickIconLeft?: () => void;
  isSelect?: boolean;
  isError?: boolean;
}

const InputSearch = ({
  label = "",
  assistiveText,
  iconLeft = "",
  iconPassword = false,
  value = "",
  handleOnBlur,
  handleOnFocus,
  isError,
  required,
  className,
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
      <S.Input {...rest}/>
      <S.Icon
        src={"/assets/icons/search.svg"}
        wrapper="div"
        className="iconRightBtn"
        aria-label="iconLabel"
      />
    </S.Container>
  );
}

export default InputSearch;