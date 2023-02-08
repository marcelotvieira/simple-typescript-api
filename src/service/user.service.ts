import ApiError from '../error/ApiError';
import { insert, userAuthenticate } from '../models/user.model';
import { IUser, IUserLogin } from '../types';
import credentialsValidation from '../validation/user.validation';

const register = async (data: IUser): Promise<object> => {
  const newUser: object = await insert(data);
  return newUser;
};

const login = async (data: IUserLogin) => {
  const { error } = credentialsValidation.validate(data);
  if (error) ApiError.badRequest(error.message);

  const response = await userAuthenticate(data);
  const [res] = response;
  if (!res) ApiError.unauthorized('Username or password invalid');
  
  const userData = { id: res.id, username: res.username };
  return userData;
};

export {
  register,
  login,
};