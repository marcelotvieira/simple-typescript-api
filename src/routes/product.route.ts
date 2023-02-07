import { Router } from 'express';
import rescue from 'express-rescue';
import { getProducts, insertNewProduct } from '../controller/product.controller';

const productRouter: Router = Router();

productRouter.get(
  '/products',
  rescue(getProducts),
);

productRouter.post(
  '/products',
  rescue(insertNewProduct),
);

export default productRouter;