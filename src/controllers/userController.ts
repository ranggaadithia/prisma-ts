import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
const prisma = new PrismaClient();

class UserController {
 async index(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
 }

  async create(req: Request, res: Response) {
    try {
      const { name, email, username } = req.body;
      const user = await prisma.user.create({
        data: {
          name,
          email,
          username
        }
      });
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export { UserController };