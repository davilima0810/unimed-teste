import styled from 'styled-components';
import InputChildren from 'react-input-children';
import { ReactSVG } from 'react-svg';

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputMaterial = styled(InputChildren)`
  height: 45px;
  width: 100%;
  border: 1px solid #E1E1E1;
  border-radius: 5rem;
  text-align: left;
  text-indent: 1.5rem;

  .iconRightBtn{
    margin-right: 1.5rem;
    left: 1rem;
  }

  ::-webkit-input-placeholder {
    margin-left: 1rem;
    text-align: left;
  }

  :-moz-placeholder {
    margin-left: 1rem;
    text-align: left;
  }

  /* &:hover, &::selection {
    border: 1px solid #838383;
  } */

`

export const Input = styled.input`
  height: 50px;
  width: 100%;
  border: 1px solid #E1E1E1;
  /* z-index: 100; */
  /* border-radius: 0px; */
  border-radius: 5rem;
  text-align: left;
  text-indent: 1.5rem;
  padding-left: 3rem;

  ::-webkit-input-placeholder {
    margin-left: 1rem;
    text-align: left;
  }

  :-moz-placeholder {
    margin-left: 1rem;
    text-align: left;
  }

  &:hover, &:focus, &:active {
    /* border: 1px solid #838383; */
  }
`

export const Icon = styled(ReactSVG)`
  width: 2.7rem;
  height: 2.7rem;

  position: relative;
  top: -47px;
  left: 12px;
`