import styled, {css} from 'styled-components';
import theme from '@/styles/theme';

import { ButtonProps } from ".";



export const Wrapper = styled.button`

  gap: 1rem;

  width: 100%;

  border: none;

  cursor: pointer;

  width: 100%;

  height: 48px;

  display: flex;

  align-items: center;

  text-decoration: none;

  justify-content: left;

  background-color: transparent;

  .ItemMenu--text {
    font-size: 1.6rem;

    font-weight: 500;

    color: #9A9A9A;
  }

  .active {
    color: #000000;
  }

  div.iconLeftBtn {
    margin-right: 1rem;

    margin-top: 4px;

    border: none;
    background: none;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }

`;