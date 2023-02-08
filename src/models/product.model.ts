import connection from './connection';
import { IProduct } from '../types';

const getAll = async (): Promise<object> => {
  const [rows]: object[] = await connection.execute('SELECT * FROM Trybesmith.products;');
  return rows;
};

const insert = async (product: IProduct) => {
  const [response] = await connection.execute(
    `INSERT INTO Trybesmith.products (name, amount)
      VALUES (?, ?)`,
    [product.name, product.amount],
  );
  if ('insertId' in response) {
    return response.insertId;
  }
};

export { insert, getAll };