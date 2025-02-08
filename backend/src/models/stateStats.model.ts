import mongoose, { Schema, Model, mongo } from 'mongoose'

import { StateDataInterface } from '../types/state'

const StateDataSchema = new Schema<StateDataInterface>({
  name: {type:String, required:true},
  restrictionLevel: {type: String, required:true},
  restrictionFacts: {type: [String]},
  weeksBan: {type:Number, required:true},
  abbr: {type:String, required: true}
})

const StateDataModel: Model<StateDataInterface> = mongoose.model<StateDataInterface>("StateData", StateDataSchema) 
export default StateDataModel;