import { Router } from "express";
import { findClinicsNearMe, getClinics } from "../controllers/clinic.controller";


const clinicRouter = Router();


clinicRouter.get('/', getClinics);
clinicRouter.get('/finder', findClinicsNearMe);

export default clinicRouter;