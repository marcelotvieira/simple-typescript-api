import connection from './connection';
import { IUser } from '../types';

const insert = async (data: IUser): Promise<object> => {
  const [response] = await connection.execute(
    `INSERT INTO Trybesmith.users (username, vocation, level, password)
        VALUES (?, ?, ?, ?)`,
    [data.username, data.vocation, data.level, data.password],
  );
  return response;
};

export default insert;