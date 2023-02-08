import { Request, Response } from 'express';
import { getAllProducts, insertProduct } from '../service/product.service';

const getProducts = async (_req: Request, res: Response) => {
  const rows: object = await getAllProducts();
  res.status(200).json(rows);
};

const insertNewProduct = async (req: Request, res: Response) => {
  const newProduct = await insertProduct(req.body);
  res.status(201).json({ id: newProduct, ...req.body });
};

export {
  getProducts,
  insertNewProduct,
};