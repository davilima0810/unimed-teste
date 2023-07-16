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
  gap: 1rem;
`;

export const ButtonAdd = styled(Button)`
  width: 230px;
  padding: 0px;
  border-radius: 5rem;
  margin: 0px;
  background-color: #00995D;
`

export const ContainerTable = styled.div`
  width:100%;
  margin: 2.5rem 0rem;
`;

export const StatusActive = styled.p`
  color: #00995D;
  font-weight: 500;
`;

export const StatusInactive = styled.p`
  color: #CC0000;
  font-weight: 500;
`;

export const ContainerActions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const ButtonActions = styled.button`
  gap: 1rem;
  border: none;
  cursor: pointer;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: left;
  background-color: transparent;
`