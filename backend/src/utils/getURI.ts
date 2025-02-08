import dotenv from 'dotenv'

dotenv.config();


export const getMONGOURI = (): string  => {
  const mongoUsername = process.env.MONGODB_USERNAME 
  const mongoPassword = process.env.MONGODB_PASSWORD 
  
  const mongoURI = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.sofpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  
  return mongoURI 
}