// Di dalam file "./route/api.ts"
import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();

const setupApiRoutes = (app: express.Application, prisma: PrismaClient) => {
  // Setup your API routes here using `app` and `prisma`
  router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'API Endpoint!' });
  });

  router.get('/users', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
  });

  router.get('/posts', async (req: Request, res: Response) => {
    const posts = await prisma.post.findFirst({
      include: { author: true },
    });
    res.json(posts?.author?.name);
  });


  return router;
};

export { setupApiRoutes };
