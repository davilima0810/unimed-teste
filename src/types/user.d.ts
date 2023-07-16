export enum Permissao {
  admin = 'admin',
  customer = 'user',
}

export interface User {
  id: string;
  nome: string;
  email: string;
  senha: string;
  permissao: Permissao | string;
  status: boolean;
}