"use client";
import React, { useState } from "react";

import * as S from "./styles";
import Input from "@/components/molecules/Input";
import Select from "@/components/molecules/Select";
import Button from "@/components/atoms/Button";
import { useRouter } from "next/navigation";
import { UserService } from "@/services/user";
import { PayloadUser } from "@/types/user";
import { NumberUtils } from "@/utils/numberUtils";

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
  const [registerFields, setRegisterFields] = useState<PayloadUser>()
  const [confirmPassword, setConfirmPassword] = useState<string>()
  const route = useRouter();

  const handleSubmit = () => {
    if(!registerFields) return

    if(id){

    }else{
      UserService.post(registerFields).then((data) =>{
        //Alert Positivo
        route.push("/dashboard/users")
      }).catch((err)=>{
        //Alert Negativo
      })
    }
  }

  return (
    <S.Container>
      <S.Title>
        Cadastrar usuário {id}
      </S.Title>
      <Input
        onChange={(e) => {
          setRegisterFields({...registerFields, name: e?.target.value })
        }}
        value={registerFields?.name}
        label="Nome"/>
      <Input
        onChange={(e) => {
          setRegisterFields({...registerFields, email: e?.target.value })
        }}
        isError={registerFields?.email ? NumberUtils.isInvalidEmail(registerFields?.email): false}
        value={registerFields?.email}
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
            initialValue={ 'customer' }
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