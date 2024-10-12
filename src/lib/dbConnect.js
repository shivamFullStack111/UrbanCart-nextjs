import mongoose from "mongoose";

let isAlreadyConnected = false;

export const dbConnect = async () => {
  if (isAlreadyConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  // Check if MongoDB URL is provided in environment variables
  const mongoUrl = process.env.MONGOURL;
  if (!mongoUrl) {
    throw new Error("MongoDB connection URL not provided");
  }

  try {
    const db = await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isAlreadyConnected = db.connection.readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    throw error;
  }
};
