import { Document } from "mongoose";
import internal from "stream";


export interface Clinic {
  name: string;
  long: number;
  lat: number;
  state: string;
}
export interface ClinicInterface extends Clinic, Document {}

