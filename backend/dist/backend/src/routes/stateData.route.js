import { Router } from "express";
import { getStateData } from "../controllers/stateData.controller";
const stateDataRouter = Router();
stateDataRouter.get('/', getStateData);
export default stateDataRouter;
