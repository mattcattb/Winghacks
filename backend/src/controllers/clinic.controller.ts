import { Request, Response } from "express"

import ClinicModel from "../models/clinic.model";
import {haversineDistance} from '../utils/distance'

export async function getClinics(req: Request, res: Response) {
  // TODO get a list of all clinics

  const clinics =  await ClinicModel.find({});
  res.status(200).json({clinics})
}

export async function findClinicsNearMe(req:Request, res:Response) {

  const {lng, lat, maxDistance} = req.query;

  try {
    if (typeof lng !== 'string' || typeof lat !== 'string') {
      res.status(400).json({ error: "Latitude and longitude are required and must be strings." });
      return
    }

    const maxDist = typeof maxDistance === 'string' ? parseFloat(maxDistance) : 5000 ;

    // 3. Convert to numbers (and validate)
    const lngNum = parseFloat(lng);
    const latNum = parseFloat(lat);

    const clinics = await ClinicModel.find({})

    const clinicsWithinDistance = clinics.map(clinic => {
      const distance = haversineDistance(latNum,lngNum, clinic.lat, clinic.lng);
      return {clinic, distance}
    }).filter(item => item.distance <= maxDist)
    .sort((a,b) => a.distance - b.distance)
    .map(item => item.clinic);

    res.status(200).json({clinicsDistance: clinicsWithinDistance})

  } catch (error) {
    console.log(`Error occured finding nearby clinics: ${error}`)
    res.status(401).json({error: "Issue with finding nearby clients"})
  }

}