"use client";
import React, { useEffect, useState } from "react";

import * as S from "./styles";
import Input from "@/components/molecules/Input";
import Select from "@/components/molecules/Select";
import Button from "@/components/atoms/Button";
import { useRouter, useParams } from "next/navigation";
import { UserService } from "@/services/user";
import { PayloadUser, User } from "@/types/user";
import { NumberUtils } from "@/utils/numberUtils";
import { alertProps } from "@/types/alert";
import Alert from "@/components/atoms/Alert";
import queryString from "query-string";

type AsyncSimpleSelectOption = {
  label: string
  value: any
}

const titlesPermissao : AsyncSimpleSelectOption[] = [
  {
      label: 'Adiministrador',
      value: 'admin'
  },
  {
      label: 'Usuário',
      value: 'customer'
  }
]

const titlesStatus : AsyncSimpleSelectOption[] = [
  {
      label: 'Ativo',
      value: 'ativo'
  },
  {
      label: 'Inativo',
      value: 'inativo'
  }
]

const AddEditUserTemplate = ({ id }: { id?: string }) => {
  const [registerFields, setRegisterFields] = useState<PayloadUser | User >()
  const [confirmPassword, setConfirmPassword] = useState<string>()
  const [message, setMessage] = useState<alertProps>({ message: '', typeAlert: ''})

  const route = useRouter();

  const handleSubmit = () => {
    if(!registerFields) return

    if(id){
      UserService.update(parseInt(id), registerFields).then((data) => {
        const messageAlert = 'Usuário cadastrado com sucesso!';
        const typeMessage = 'success';
        const urlWithQuery = `/dashboard/users?${queryString.stringify({ messageAlert, typeMessage })}`;
        route.push(urlWithQuery);
      }).catch((err)=>{
        setMessage({ message:"Erro ao editar usuários!", typeAlert: 'danger'})
      })

    }else{
      UserService.post(registerFields).then((data) =>{
        const messageAlert = 'Usuário cadastrado com sucesso!';
        const typeMessage = 'success';
        const urlWithQuery = `/dashboard/users?${queryString.stringify({ messageAlert, typeMessage })}`;
        route.push(urlWithQuery);

      }).catch((err)=>{
        setMessage({ message:"Erro ao salvar usuários!", typeAlert: 'danger'})
      })
    }
  }

  useEffect(()=>{
    if (!id) return

    UserService.getById(parseInt(id)).then((data) =>{
      setRegisterFields(data)
    }).catch((err)=>{
      setMessage({ message:"Erro ao carregar usuário!", typeAlert: 'danger'})
    })
  },[id])

  return (
    <S.Container>
      {message?.message && (<Alert alertType={message.typeAlert} onClose={setMessage}>{message.message}</Alert>)}
      <S.Title>
        {id ? 'Editar usuário' : 'Cadastrar usuário'}

      </S.Title>
      <Input
        onChange={(e) => {
          setRegisterFields({...registerFields, name: e?.target.value })
        }}
        value={registerFields?.name}
        defaultValue={registerFields?.name}
        label="Nome"/>
      <Input
        onChange={(e) => {
          setRegisterFields({...registerFields, email: e?.target.value })
        }}
        isError={registerFields?.email ? NumberUtils.isInvalidEmail(registerFields?.email): false}
        value={registerFields?.email}
        defaultValue={registerFields?.email}
        label="E-mail"/>
      <Input
        onChange={(e) => {
          setRegisterFields({...registerFields, password: e?.target.value })
        }}
        value={registerFields?.password}
        type="password"
        label="Senha"/>
      <Input
        value={confirmPassword}
        isError={confirmPassword && registerFields?.password ? NumberUtils.arePasswordsEqual(registerFields?.password, confirmPassword) : false}
        onChange={(e) => {
          setConfirmPassword(e?.target?.value)
        }}
        type="password"
        label="Confirme sua senha"/>
      <S.ContainerProps>
        <S.ContainerGrid>
          <Select
            onChange={(e) => {
              setRegisterFields({...registerFields, permissao: e?.target?.value })
            }}
            value={registerFields?.permissao}
            label="Permissão"
            placeholder="Permissão"
            listProps={titlesPermissao}
            ></Select>
        </S.ContainerGrid>
        <S.ContainerGrid>
          <Select
            onChange={(e) => {
              setRegisterFields({...registerFields, status: e?.target?.value  === 'ativo' ? true : false })
            }}
            value={ registerFields?.status ? 'ativo' : 'inativo' }

            label="Status"
            placeholder="Status"
            listProps={titlesStatus}
            ></Select>
        </S.ContainerGrid>
      </S.ContainerProps>
      <S.ContainerButtons>
        <Button
          style={{backgroundColor: "#9E9E9E"}}
          iconLeft={"/assets/icons/arrow-left-white.svg"}
          onClick={()=> route.push("/dashboard/users")}
        >
          Voltar
        </Button>
        <Button
          style={{backgroundColor: "#00995d"}}
          iconLeft={"/assets/icons/user-check-white.svg"}
          onClick={()=> {
            handleSubmit()
          }}
        >
          Cadastrar
        </Button>
      </S.ContainerButtons>
    </S.Container>
  );
}

export default AddEditUserTemplate;