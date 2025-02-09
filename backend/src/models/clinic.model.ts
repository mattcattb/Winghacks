import mongoose, { Schema, Model, mongo } from 'mongoose'

import { ClinicInterface } from '../types/clinic'

const ClinicSchema = new Schema<ClinicInterface>({
  name: {type:String, required:true},
  lat: {type: Number, required:true},
  lng: {type: Number, required:true},
  state:{type:String, required: true}
})

const ClinicModel: Model<ClinicInterface> = mongoose.model<ClinicInterface>("Clinic", ClinicSchema) 
export default ClinicModel;