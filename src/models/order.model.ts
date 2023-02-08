import connection from './connection';

const getAll = async (): Promise<object> => {
  const [rows]: object[] = await connection
    .execute(`
    SELECT 
    orders.id, 
    orders.user_id AS userId, 
    JSON_ARRAYAGG(Trybesmith.products.id) AS productsIds
  FROM Trybesmith.orders
  LEFT JOIN Trybesmith.products ON Trybesmith.orders.id = Trybesmith.products.order_id
  GROUP BY orders.id;
  `);

  return rows;
};

export default getAll;