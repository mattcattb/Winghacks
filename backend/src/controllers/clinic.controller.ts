import { Request, Response } from "express"

import ClinicModel from "../models/clinic.model";

export async function getClinics(req: Request, res: Response) {
  // TODO get a list of all clinics

  const clinics =  ClinicModel.find({});
  res.status(400).json({clinics})
}

interface QueryParams {
  lng: string;
  lat: string; 
}

export async function findClinicsNearMe(req:Request, res:Response) {

  const {lng, lat} = req.query;

  if (typeof lng !== 'string' || typeof lat !== 'string') {
    return res.status(400).json({ error: "Latitude and longitude are required and must be strings." });
  }

  const queryParams = { lng, lat } as QueryParams;

  // 3. Convert to numbers (and validate)
  const lngNum = parseFloat(queryParams.lng);
  const latNum = parseFloat(queryParams.lat);


  // TODO get a list of clinics nearby user
}