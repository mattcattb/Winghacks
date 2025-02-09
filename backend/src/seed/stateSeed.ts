// seed.ts (or seed.js)
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import StateDataModel from '../models/stateStats.model';
import { StateDataInterface } from '../types/state';

import {statesArray} from './statesSeedData';

dotenv.config(); // Load environment variables (for DB connection)

const seedDatabase = async () => {

  const mongoUsername = process.env.MONGODB_USERNAME 
  const mongoPassword = process.env.MONGODB_PASSWORD 

  const mongoURI = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.sofpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


  try {
    await mongoose.connect(mongoURI); // Connect to your database

    // Clear existing data (optional, but good for development)
    await StateDataModel.deleteMany({}); // Delete all existing documents

    await StateDataModel.insertMany(statesArray); // Insert the new data
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect(); // Close the connection when done
  }
};

seedDatabase();