import { getAll, insert, IProduct } from '../models/product.model';

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
