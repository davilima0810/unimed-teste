'use client';
import React, { useEffect, useState } from 'react';

import * as S from './styles';
import InputSearch from '@/components/molecules/InputSearch';
import TablePagination from '@/components/molecules/TablePagination';
import { User } from '@/types/user';
import usersArray from './mockUser';
import { IPagination } from '@/types/pagination';
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ReactSVG } from 'react-svg';
import { UserService } from '@/services/user';
import Modal from '@/components/molecules/Modal';
import Alert from '@/components/atoms/Alert';
import { alertProps } from '@/types/alert';

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
  const [listUsers, setListUsers] = useState<User[]>()
  const [selectUsersId, setSelectUsersId] = useState<number>()
  const [message, setMessage] = useState<alertProps>({ message: '', typeAlert: ''})
  const [isOpen, setIsOpen] = useState(false)
  const [numberPage, setNumberPage] = useState(0)
  const [pagination, setPagination] = useState<IPagination>();

  const params = useSearchParams()
  const route = useRouter();


  const tablePaginationProps = {
    titles,
    pagination
  }

  const handleOpenModal = () => {
    setIsOpen(!isOpen)
  }

  const handleDeleteUser = () => {
    if(!selectUsersId) return

    UserService.delete(selectUsersId).then((data)=>{
      setMessage({ message:"Usuário excluído com sucesso!", typeAlert: 'success'})
      LoadingData()
      handleOpenModal()
    }).catch((err)=>{
      setMessage({ message:"Erro ao excluir usuário!", typeAlert: 'danger'})
    })
  }

  const LoadingData = () => {
    UserService.get().then(({ data }) =>{
      setListUsers(data?.data);
      setPagination({
        totalRegistros: data?.total,
        linhasPorPagina: data?.limit,
        paginaAtual: data?.skip,
        totalPaginas: (data?.total % data?.limit)+1,
        setNumberPage: setNumberPage
      })
    }).catch((err)=>{
      setMessage({ message:"Erro ao carregar usuários!", typeAlert: 'danger'})
    })
  }

  useEffect(()=>{
    LoadingData();
  },[])

  useEffect(()=>{
    params.get('messageAlert')

    setMessage({ message: params?.get('messageAlert') || '', typeAlert: params.get('typeMessage') || ''})

  },[])

  return (
    <S.Container>
      {message && (<Alert alertType={message.typeAlert} onClose={setMessage}>{message.message}</Alert>)}
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
          values={listUsers?.length ? listUsers?.map((item) => ({
            ...item,
            permissao: Permissoes?.find((permissao)=> permissao.value === item?.permissao)?.label,
            action: (
              <S.ContainerActions>
                <S.ButtonActions
                  onClick={() => {
                    route.push(`/dashboard/users/edit/${item?.id}`)
                  }}
                >
                  <ReactSVG
                    src={'/assets/icons/edit.svg'}
                    wrapper="div"
                    className="iconRight"
                    aria-label="iconLabel"
                  />
                </S.ButtonActions>
                <S.ButtonActions
                  onClick={() => {
                    setSelectUsersId(item?.id)
                    handleOpenModal()
                  }}
                >
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
          })) : []}
          {...tablePaginationProps}
          isLoading={false}
        />
      </S.ContainerTable>
      <Modal isOpen={isOpen} onClose={handleOpenModal} >
        <S.ContainerModal>
          <ReactSVG
            src={'/assets/icons/alert-triangle-orange.svg'}
            wrapper="div"
            className="icon"
            aria-label="iconLabel"
          />
          <S.TextModal>
            Deseja realmente excluir o usuário?
          </S.TextModal>

          <S.ContainerButtons>
            <S.ButtonConfirm
              iconLeft={'/assets/icons/trash-2-white.svg'}
              onClick={handleDeleteUser}
            >Sim, excluir usuário!</S.ButtonConfirm>
            <S.ButtonCancel
              onClick={handleOpenModal}
            >Cancelar</S.ButtonCancel>
          </S.ContainerButtons>
        </S.ContainerModal>
      </Modal>
    </S.Container>
  );
}

export default UserTemplate;