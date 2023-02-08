import { Router } from 'express';
import rescue from 'express-rescue';
import getOrders from '../controller/order.controller';

const orderRouter: Router = Router();

orderRouter.get(
  '/orders',
  rescue(getOrders),
);

export default orderRouter;