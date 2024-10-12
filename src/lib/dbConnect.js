import mongoose from "mongoose";

let isAlreadyConnected = false;

export const dbConnect = async () => {
  if (isAlreadyConnected) {
    console.log("already connected");
    return;
  }
  if (!process.env.MONGOURL) {
    throw new Error("MongoDB connection URL not provided");
  }

  try {
    const db = await mongoose.connect(process.env.MONGOURL || "");

    isAlreadyConnected = db.connection.readyState;
  } catch (error) {
    console.log("error in connect mongodb", error.message);
    return error;
  }
};
