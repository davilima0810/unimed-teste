import { Inter } from 'next/font/google'

import StyledComponentsRegistry from '../../lib/library'

import Sidebar from '@/components/organisms/Sidebar';

import React from 'react'
import AuthProvider from '@/context/auth';
import { AxiosInterceptor } from '@/services/api';

import { UserService } from '@/services/user';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        <title>Dashboard - Unimed Teresina</title>
      </head>
      <body className={inter.className}>
          <StyledComponentsRegistry>
              <AxiosInterceptor />
            <AuthProvider>
              <Sidebar>{children}</Sidebar>
            </AuthProvider>
          </StyledComponentsRegistry>
      </body>
    </html>
  )
}
