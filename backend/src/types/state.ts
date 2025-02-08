import { Document } from "mongoose";
import internal from "stream";


type RestrictionLevel = "Very High" | "High" | "Neutral" | "Low" | "Very Low" | string; // Union type


export interface StateData {
  name: string;
  restrictionLevel: RestrictionLevel;
  restrictionFacts: string[];
  weeksBan: number;
  abbr: string;
}
export interface StateDataInterface extends StateData, Document {}

