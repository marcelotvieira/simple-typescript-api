import { getAll, insert } from '../models/product.model';
import { IProduct } from '../types';

const getAllProducts = async (): Promise<object> => {
  const products: object = await getAll();
  return products;
};

const insertProduct = async (product: IProduct) => {
  const newProduct = await insert(product);
  return newProduct;
};

export {
  getAllProducts,
  insertProduct,
};
