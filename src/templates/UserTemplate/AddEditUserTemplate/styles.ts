import styled from 'styled-components';
import Button from '@/components/atoms/Button';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: red; */

  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`

export const ContainerProps = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const ContainerGrid = styled.div`
  width: 50%;
  display: flex;
`;

export const ContainerButtons = styled.div`
  width: 80%;
  display: flex;
  gap: 1rem;
  margin: 2rem 0rem;
`;
