// seed.ts (or seed.js)
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import ClinicModel from '../models/clinic.model';

import {clinicsData} from './clinicSeed.data'

dotenv.config(); // Load environment variables (for DB connection)

const seedDatabase = async () => {

  const mongoUsername = process.env.MONGODB_USERNAME 
  const mongoPassword = process.env.MONGODB_PASSWORD 

  const mongoURI = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.sofpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


  try {
    await mongoose.connect(mongoURI); // Connect to your database

    // Clear existing data (optional, but good for development)
    await ClinicModel.deleteMany({}); // Delete all existing documents

    await ClinicModel.insertMany(clinicsData); // Insert the new data
    console.log('Clinics Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect(); // Close the connection when done
  }
};

seedDatabase();