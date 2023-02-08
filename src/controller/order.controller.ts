import { Request, Response } from 'express';
import getAllOrders from '../service/order.service';

const getProducts = async (_req: Request, res: Response) => {
  const rows: object = await getAllOrders();
  res.status(200).json(rows);
};

export default getProducts;