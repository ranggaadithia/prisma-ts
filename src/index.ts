import express, { Request, Response } from "express";
import { userRoutes } from "./route/userRoutes";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes());


app.listen(3000, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:3000`)
)
