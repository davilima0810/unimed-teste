'use client';
import React from 'react';

import * as S from './styles';
import InputSearch from '@/components/molecules/InputSearch';

const UserTemplate = () => {
  return (
    <S.Container>
      <S.TopContainer>
        <S.Title>
          Usuários
        </S.Title>
        <S.ContainerSearch>
          <InputSearch placeholder='Buscar usuário' />
          <S.ButtonAdd iconLeft={'/assets/icons/user-plus-white.svg'}>Adicionar usuário</S.ButtonAdd>
        </S.ContainerSearch>
      </S.TopContainer>
    </S.Container>
  );
}

export default UserTemplate;