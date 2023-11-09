import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`Connected to Database: ${connect.connection.name}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbConnect;
