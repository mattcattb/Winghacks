import { Response, Request } from "express";
import StateDataModel from "../models/stateStats.model";
import { stat } from "fs";

interface QueryParams {
  abbr?: string; 
}

export async function getStateData(req: Request<{}, {}, QueryParams>, res:Response){
  const {abbr} = req.query;
  try {

    if (!abbr) {
      // return all!
      const statesData = await StateDataModel.find({});
      res.status(201).json({statesData: statesData})
    } else {
      // return state with the abbr
      
      const stateData = await StateDataModel.findOne({'abbr':abbr.toString().toUpperCase()})
      if (!stateData) {
        res.status(401).json({message: `No state found for abbr ${abbr}`})
      } else {
        res.status(200).json({stateData: stateData})
      }

    }
  } catch (error) {
    console.log(`Error occured getting state data: ${error}`)
    res.status(401).json({message: "Error getting state data."})
  }

}