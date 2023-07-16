'use client';
import React, { useState } from 'react';

import * as S from './styles';
import InputSearch from '@/components/molecules/InputSearch';
import TablePagination from '@/components/molecules/TablePagination';
import { User } from '@/types/user';
import usersArray from './mockUser';
import { IPagination } from '@/types/pagination';
import { useRouter } from "next/navigation";
import { ReactSVG } from 'react-svg';

const titles = [
  {
      label: 'Nome',
      value: 'name'
  },
  {
      label: 'E-mail',
      value: 'email'
  },
  {
      label: 'Permissão',
      value: 'permissao'
  },
  {
      label: 'Status',
      value: 'status'
  },
  {
      label: '',
      value: 'action'
  }
]

const Permissoes = [
  {value: 'admin', label: 'Administrador'},
  {value: 'customer', label: 'Usuário'}
]

const UserTemplate = () => {
  const [listUsers, setListUsers] = useState<User[]>(usersArray)
  const [numberPage, setNumberPage] = useState(0)
  const [pagination, setPagination] = useState<IPagination>({
      totalRegistros: 100,
      totalPaginas: 10,
      linhasPorPagina: 10,
      paginaAtual: 3,
      setNumberPage: setNumberPage
  });

  const route = useRouter();

  const tablePaginationProps = {
    titles,
    pagination
  }

  return (
    <S.Container>
      <S.TopContainer>
        <S.Title>
          Usuários
        </S.Title>
        <S.ContainerSearch>
          <InputSearch placeholder='Buscar usuário' />
          <S.ButtonAdd
            iconLeft={'/assets/icons/user-plus-white.svg'}
            onClick={()=> route.push("/dashboard/users/add")}
          >Adicionar usuário</S.ButtonAdd>
        </S.ContainerSearch>
      </S.TopContainer>
      <S.ContainerTable>
        <TablePagination
          customGridStyles={'1.5fr 2fr 1fr 0.6fr 0.4fr'}
          values={listUsers?.map((item) => ({
            ...item,
            permissao: Permissoes?.find((permissao)=> permissao.value === item?.permissao)?.label,
            action: (
              <S.ContainerActions>
                <S.ButtonActions>
                  <ReactSVG
                    src={'/assets/icons/edit.svg'}
                    wrapper="div"
                    className="iconRight"
                    aria-label="iconLabel"
                  />
                </S.ButtonActions>
                <S.ButtonActions>
                  <ReactSVG
                    src={'/assets/icons/trash-2.svg'}
                    wrapper="div"
                    className="iconRight"
                    aria-label="iconLabel"
                  />
                </S.ButtonActions>
            </S.ContainerActions>
            ),
            status: item?.status
                    ? <S.StatusActive>Ativo</S.StatusActive>
                    : <S.StatusInactive>Inativo</S.StatusInactive>
          }))}
          {...tablePaginationProps}
          isLoading={false}
        />
      </S.ContainerTable>
    </S.Container>
  );
}

export default UserTemplate;