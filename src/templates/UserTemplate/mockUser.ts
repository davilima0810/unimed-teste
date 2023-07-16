import { User } from '@/types/user';

const user1 : User = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'senha123',
  permissao: 'admin',
  status: true,
};

const user2 :User =  {
  id: 2,
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  password: 'password456',
  permissao: 'customer',
  status: true,
};

const user3 :User = {
  id: 3,
  name: 'Bob Johnson',
  email: 'bob.johnson@example.com',
  password: 'securePwd789',
  permissao: 'customer',
  status: false,
};

const usersArray = [user1, user2, user3];

export default usersArray;