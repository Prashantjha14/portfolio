import config from "@/config";
import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (!config.mongoUri) {
    console.error("No Mongo URI found!");
    return Promise.reject(new Error("No Mongo URI found!"));
  }

  if (isConnected) return;

  try {
    await mongoose.connect(config.mongoUri, {
      dbName: "prashant_portfolio",
    });

    isConnected = true;
    return Promise.resolve();
  } catch (error) {
    console.error(error);
    return Promise.reject(
      new Error("Error connecting to database! \nError: " + error)
    );
  }
};
