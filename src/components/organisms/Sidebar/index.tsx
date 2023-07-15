'use client';
import React from 'react';

import * as S from './styles';
import ItemMenu from '@/components/atoms/ItemMenu';
import { ReactSVG } from 'react-svg';

import { useRouter } from "next/navigation";


const Sidebar = ({
  children
} : {
  children: React.ReactNode
}) => {
  const route = useRouter();

  function formatarData(data: Date): string {
    const diasSemana: string[] = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const meses: string[] = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    const diaSemana: string = diasSemana[data.getDay()];
    const dia: number = data.getDate();
    const mes: string = meses[data.getMonth()];
    const ano: number = data.getFullYear();

    return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
  }

  return (
    <S.Wrapper>
      <S.BarLeft>
        <S.BarLeftOption>
          <S.ImageLogo src={"/assets/img/logo_unimed.png"} />

          <S.listSidebar>
            <li>
              <ItemMenu
                iconLeftActive='/assets/icons/home-active.svg'
                iconLeft='/assets/icons/home-active.svg'
                active={true}
                onClick={()=>route.push("/dashboard")}
              >
                Home
              </ItemMenu>
            </li>
            <li>
              <ItemMenu
                iconLeftActive='/assets/icons/user.svg'
                iconLeft='/assets/icons/user.svg'
                onClick={()=>route.push("/dashboard/users")}
              >
                  Usuários
              </ItemMenu>
            </li>
            <li>
              <ItemMenu
                iconLeftActive='/assets/icons/log-out.svg'
                iconLeft='/assets/icons/log-out.svg'
                onClick={()=>route.push("/")}
              >
                  Sair
              </ItemMenu>
            </li>
          </S.listSidebar>
        </S.BarLeftOption>
      </S.BarLeft>
      <S.ContainerRight>
        <S.BarTop>
          <S.DivTitle>
            <S.Title>Bem Vindo, Davi</S.Title>
            <S.SubTitle>{(formatarData(new Date()))}</S.SubTitle>
          </S.DivTitle>

          <S.DivProfile>
            <S.ButtonProfile>
              <ReactSVG
                src={'/assets/icons/search.svg'}
                wrapper="div"
                className="iconRight"
                aria-label="iconLabel"
              />
            </S.ButtonProfile>
            <S.ButtonProfile>
              <ReactSVG
                src={'/assets/icons/mail.svg'}
                wrapper="div"
                className="iconRight"
                aria-label="iconLabel"
              />
            </S.ButtonProfile>
            <S.Profile></S.Profile>
          </S.DivProfile>

        </S.BarTop>

        {children}
      </S.ContainerRight>
    </S.Wrapper>
  );
}

export default Sidebar;