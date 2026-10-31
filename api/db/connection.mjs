import "dotenv/config";
import mongoose from "mongoose";

async function connection() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

connection();

export default mongoose;
