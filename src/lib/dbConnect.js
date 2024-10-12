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
    const db = await mongoose.connect(
      "mongodb+srv://agdtyuimnb:agdtyuimnb@cluster0.uyhpu.mongodb.net/URBANCART?retryWrites=true&w=majority&appName=Cluster0"
    );

    isAlreadyConnected = db.connection.readyState;
  } catch (error) {
    console.log("error in connect mongodb", error.message);
    return error;
  }
};
