import insert from '../models/user.model';
import { IUser } from '../types';

const register = async (data: IUser): Promise<object> => {
  const newUser: object = await insert(data);
  return newUser;
};

export default register;