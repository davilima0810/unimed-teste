'use client';
import React, { useState } from 'react';
import * as S from "./styles";
import Input from '@/components/molecules/Input';
import Button from '@/components/atoms/Button';
import Image from 'next/image';

import { useRouter } from "next/navigation";

import * as yup from "yup";
import { useFormik } from "formik";

export default function SingInTemplate() {
  const [registerForm, setRegisterForm] = useState<boolean>(false)

  const route = useRouter();

  const validationSchema = yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      // auth(value);
    },
    validate: (values) => {
      const errors = { email: "" };
      console.log(values)
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      console.log(errors)
      return errors;
    },
    validationSchema: validationSchema,
  });

  return (
    <S.Container>
      <S.Grid1 />
      <S.Grid2>
        <S.Title>{registerForm ? "Faça seu cadastro" : "Login"} </S.Title>
        <S.ContainerForm>
          {!registerForm ? (
            <S.Form>
              <Input
                label='E-mail'
                placeholder='Informe seu e-mail'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onError={()=> formik.errors.email }
                isError={true}
              />
              <Input label='Senha' placeholder='Informe sua senha' type='password'/>
              <Button
                style={{backgroundColor: "#00995d"}}
                iconLeft={"assets/icons/log-in-white.svg"}
                onClick={()=>{
                  // formik.handleSubmit();
                  route.push("/dashboard");
                }}
              >
                Entrar
              </Button>
              <Button
                style={{backgroundColor: "#9E9E9E"}}
                iconLeft={"assets/icons/user-plus-white.svg"}
                onClick={()=>setRegisterForm(!registerForm)}
              >
                Não tenho conta
              </Button>
            </S.Form>
          ) : (
            <S.Form>
              <Input label='Nome' placeholder='Informe seu nome' />
              <Input label='E-mail' placeholder='Informe seu e-mail' />
              <Input label='Senha' placeholder='Informe sua senha' type='password'/>
              <Input label='Senha' placeholder='Confirme sua senha' type='password'/>
              <Button
                style={{backgroundColor: "#00995d"}}
                iconLeft={"assets/icons/user-check-white.svg"}
              >
                Cadastrar
              </Button>
              <Button
                style={{backgroundColor: "#9E9E9E"}}
                iconLeft={"assets/icons/arrow-left-white.svg"}
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