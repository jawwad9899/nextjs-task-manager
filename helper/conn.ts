import mongoose from "mongoose";

async function connectDB() {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI!, {
        dbName: "TaskManagement",
      });
      console.log("Connected To MongoDB");
    }
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
