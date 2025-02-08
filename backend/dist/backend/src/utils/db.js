import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const mongoUsername = process.env.MONGODB_USERNAME;
const mongoPassword = process.env.MONGODB_PASSWORD;
const mongoURI = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.sofpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(`mongoURI: ${mongoURI}`);
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI);
    }
    catch (error) {
        console.log("Error setting up mongodb database: ", error);
    }
};
