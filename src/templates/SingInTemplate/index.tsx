'use client';
import React, { useState } from 'react';
import * as S from "./styles";
import Input from '@/components/molecules/Input';
import Button from '@/components/atoms/Button';
import Image from 'next/image';

import { useRouter } from "next/navigation";

import { login } from "@/services/auth";

import { CredencialLogin } from '@/types/credencial';
import { useDataAuth } from '@/hooks/auth';
import { PayloadUser } from '@/types/user';
import { UserService } from '@/services/user';
import { NumberUtils } from '@/utils/numberUtils';
import Alert from '@/components/atoms/Alert';
import { alertProps } from '@/types/alert';

export default function SingInTemplate() {
  const [registerForm, setRegisterForm] = useState<boolean>(false)
  const [registerFields, setRegisterFields] = useState<PayloadUser>()
  const [fieldsLogin, setFieldsLogin] = useState<CredencialLogin>()
  const [confirmPassword, setConfirmPassword] = useState<string>()

  const [message, setMessage] = useState<alertProps>({ message: '', typeAlert: ''})

  const route = useRouter();
  const { setDataToken, setDataUser } = useDataAuth();

  const SubmitLogin = async () => {
    if (!fieldsLogin?.email || !fieldsLogin?.password ) return

    login({...fieldsLogin, strategy: 'local'})
      .then(({ data }) =>{
        setDataToken(data?.accessToken)
        setDataUser(data?.user)
        route.push("/dashboard");
      })
      .catch((err) => {
        setMessage({ message:"Erro ao fazer login!", typeAlert: 'danger'})
      })
  }

  const SubmitRegister = async () => {
    UserService.post({...registerFields, status: true, permissao: 'customer'})
    .then((data) => {
      setMessage({ message:"Usuário cadastrado com sucesso!", typeAlert: 'success'})
      setRegisterForm(!registerForm)
    }).catch((err) => {
      setMessage({ message:"Erro ao concluir cadastro!", typeAlert: 'danger'})
    })
  }

  return (
    <S.Container>
      <S.Grid1 />
      <S.Grid2>
        <S.Title>{registerForm ? "Faça seu cadastro" : "Login"} </S.Title>
        <S.ContainerForm>
          {!registerForm ? (
            <S.Form>
              {(message?.message)
              && (<Alert alertType={message.typeAlert} onClose={setMessage}>{message.message}</Alert>)}
              <Input
                label='E-mail'
                placeholder='Informe seu e-mail'
                value={fieldsLogin?.email}
                onChange={(e)=>{
                  setFieldsLogin({...fieldsLogin, email: e?.target?.value });
                }}
                isError={fieldsLogin?.email ? NumberUtils.isInvalidEmail(fieldsLogin?.email): false}
              />
              <Input
                label='Senha'
                value={fieldsLogin?.password}
                onChange={(e)=>{
                  setFieldsLogin({
                    ...fieldsLogin,
                    password: e?.target?.value
                  });
                }}
                placeholder='Informe sua senha'
                type='password'
              />
              <Button
                style={{backgroundColor: "#00995d"}}
                iconLeft={"/assets/icons/log-in-white.svg"}
                onClick={()=>{
                  // formik.handleSubmit();
                  // route.push("/dashboard");
                  SubmitLogin()
                }}
              >
                Entrar
              </Button>
              <Button
                style={{backgroundColor: "#9E9E9E"}}
                iconLeft={"/assets/icons/user-plus-white.svg"}
                onClick={()=>setRegisterForm(!registerForm)}
              >
                Não tenho conta
              </Button>
            </S.Form>
          ) : (
            <S.Form>
              {
              message?.message
              && (<Alert alertType={message.typeAlert} onClose={setMessage}>{message.message}</Alert>)}
              <Input
                value={registerFields?.name}
                onChange={(e) => {
                  setRegisterFields({...registerFields, name: e?.target?.value})
                }}
                label='Nome' placeholder='Informe seu nome' />
              <Input
                value={registerFields?.email}
                onChange={(e) => {
                  setRegisterFields({...registerFields, email: e?.target?.value})
                }}
                label='E-mail' placeholder='Informe seu e-mail'
                isError={registerFields?.email ? NumberUtils.isInvalidEmail(registerFields?.email): false}
                />
              <Input
                value={registerFields?.password}
                onChange={(e) => {
                  setRegisterFields({...registerFields, password: e?.target?.value})
                }}
                label='Senha' placeholder='Informe sua senha' type='password'/>
              <Input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e?.target?.value)}
                isError={confirmPassword && registerFields?.password ? NumberUtils.arePasswordsEqual(registerFields?.password, confirmPassword) : false}
                label='Senha' placeholder='Confirme sua senha' type='password'/>
              <Button
                style={{backgroundColor: "#00995d"}}
                iconLeft={"/assets/icons/user-check-white.svg"}
                onClick={() => SubmitRegister()}
              >
                Cadastrar
              </Button>
              <Button
                style={{backgroundColor: "#9E9E9E"}}
                iconLeft={"/assets/icons/arrow-left-white.svg"}
                onClick={()=>setRegisterForm(!registerForm)}
              >
                Voltar
              </Button>
            </S.Form>
          )}
          <Image width={162} height={75} alt={'unimed-image'} src={"/assets/img/logo_unimed.png"}/>
        </S.ContainerForm>
      </S.Grid2>
    </S.Container>
  );
}