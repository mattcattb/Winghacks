import mongoose, { Schema } from 'mongoose';
const StateDataSchema = new Schema({
    name: { type: String, required: true },
    restrictionLevel: { type: String, required: true },
    restrictionFacts: { type: [String] },
    weeksBan: { type: Number, required: true },
    abbr: { type: String, required: true }
});
const StateDataModel = mongoose.model("StateData", StateDataSchema);
export default StateDataModel;
