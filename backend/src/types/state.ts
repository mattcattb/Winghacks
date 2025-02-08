import { Document } from "mongoose";
import internal from "stream";


type RestrictionLevel = 5 | 4 | 3 | 2 | 1 | 0; // Union type

export interface StateData {
  name: string;
  restrictionLevel: RestrictionLevel;
  restrictionFacts: string[];
  weeksBan: number;
  abbr: string;
}
export interface StateDataInterface extends StateData, Document {}

