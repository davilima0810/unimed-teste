"use client";
import React from "react";

import * as S from "./styles";
import Input from "@/components/molecules/Input";
import Select from "@/components/molecules/Select";
import Button from "@/components/atoms/Button";
import { useRouter } from "next/navigation";

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
      value: true
  },
  {
      label: 'Inativo',
      value: false
  }
]

const AddEditUserTemplate = ({ id }: { id?: string }) => {
  const route = useRouter();

  return (
    <S.Container>
      <S.Title>
        Cadastrar usuário {id}
      </S.Title>
      <Input label="Nome"/>
      <Input label="E-mail"/>
      <Input type="password" label="Senha"/>
      <Input type="password" label="Confirme sua senha"/>
      <S.ContainerProps>
        <S.ContainerGrid>
          <Select label="Permissão" placeholder="Permissão" listProps={titlesPermissao}></Select>
        </S.ContainerGrid>
        <S.ContainerGrid>
          <Select label="Status" placeholder="Status" listProps={titlesStatus}></Select>
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
          onClick={()=> route.push("/dashboard/users")}
        >
          Cadastrar
        </Button>
      </S.ContainerButtons>
    </S.Container>
  );
}

export default AddEditUserTemplate;