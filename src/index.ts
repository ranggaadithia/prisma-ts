import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import createError from "http-errors";


const prisma = new PrismaClient();
const app = express();

app.use(express.json());

import { setupApiRoutes } from "./route/api";

// Setup API routes
const apiRouter = setupApiRoutes(app, prisma);

// Use the router in your Express app
app.use('/api', apiRouter);


app.listen(3000, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:3000`)
)
