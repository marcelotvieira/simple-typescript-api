interface IProduct {
  name: string,
  amount: string
}

interface IUser {
  username: string,
  vocation: string,
  level: number,
  password: string,
}

interface IUserLogin {
  username: string,
  password: string,
}

interface ILoginResponse {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export {
  IProduct,
  IUser,
  IUserLogin,
  ILoginResponse,
};