import mongoose from "mongoose";

const createConnection = () => {
  try {
    const con = mongoose.connect(process.env.MONGO_URL);
    con && console.log("Connected to Mongo");
  } catch (error) {
    console.log(error);
  }
};

export default createConnection;
