export enum Permissao {
  admin = 'admin',
  customer = 'user',
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  permissao: Permissao | string;
  status: boolean;
}

export interface PayloadUser {
  name?: string;
  email?: string;
  password?: string;
  permissao?: Permissao | string;
  status?: boolean;
}