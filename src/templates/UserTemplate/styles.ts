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

export const ContainerSearch = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-right: 1rem;
  gap: 1rem
`;

export const ButtonAdd = styled(Button)`
  width: 230px;
  padding: 0px;
  border-radius: 5rem;
  margin: 0px;
  background-color: #00995D;
`