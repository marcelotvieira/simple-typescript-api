import connection from './connection';
import { ILoginResponse, IUser, IUserLogin } from '../types';

const insert = async (data: IUser): Promise<object> => {
  const [response] = await connection.execute(
    `INSERT INTO Trybesmith.users (username, vocation, level, password)
        VALUES (?, ?, ?, ?)`,
    [data.username, data.vocation, data.level, data.password],
  );
  return response;
};

const userAuthenticate = async (data: IUserLogin) => {
  const [response] = await connection.execute(
    `SELECT * FROM Trybesmith.users
    WHERE username = ? AND password = ?`,
    [data.username, data.password],
  );
  const binaryRow = response as ILoginResponse[];
  return binaryRow;
};

export {
  insert, 
  userAuthenticate,
};