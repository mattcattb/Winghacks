import { Document } from "mongoose";
import internal from "stream";


enum restrictionLevel {
  VERY_HIGH = "",
  HIGH = "",
  NEUTRAL = "",
  LOW = "",
  VERY_LOW = ""
}

export interface StateDataInterface extends Document {
  name:string,
  restrictionLevel: restrictionLevel,
  restrictionFacts: string[],
  weeksBan: number,
  abbr:string
}