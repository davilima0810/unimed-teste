const user1 = {
  id: '1',
  nome: 'John Doe',
  email: 'john.doe@example.com',
  senha: 'senha123',
  permissao: 'admin',
  status: true,
};

const user2 = {
  id: '2',
  nome: 'Jane Smith',
  email: 'jane.smith@example.com',
  senha: 'password456',
  permissao: 'customer',
  status: true,
};

const user3 = {
  id: '3',
  nome: 'Bob Johnson',
  email: 'bob.johnson@example.com',
  senha: 'securePwd789',
  permissao: 'customer',
  status: false,
};

const usersArray = [user1, user2, user3];

export default usersArray;