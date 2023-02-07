import connection from './connection';

const getAll = async (): Promise<object> => {
  const [rows]: object[] = await connection.execute('SELECT * FROM Trybesmith.products;');
  console.log(rows);
  return rows;
};

interface IProduct {
  name: string,
  amount: string
}

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

export { insert, getAll, IProduct };