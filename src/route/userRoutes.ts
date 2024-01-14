import express, { Request, Response } from 'express';
import { UserController } from '../controllers/userController';

const router = express.Router();
const userController = new UserController();

const userRoutes = () => {
  router.get('/', userController.index);
  router.post('/', userController.create);
  return router;
};

export { userRoutes };
