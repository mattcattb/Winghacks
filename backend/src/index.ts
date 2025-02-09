// src/index.ts
import express, { Express, json } from "express";
import morgan from 'morgan'
import cors from 'cors'
import dotenv from "dotenv";

import stateDataRouter from "./routes/stateData.route";
import clinicRouter from "./routes/clinic.route";

import { connectDB } from "./utils/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods:'GET,POST',
  credentials: true
}))

app.use(json());
app.use(morgan('dev'))

app.use('/api/stateData', stateDataRouter);
app.use('/api/clinic', clinicRouter);

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {  
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

startServer();


