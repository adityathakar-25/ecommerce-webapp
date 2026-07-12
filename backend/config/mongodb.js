import mongoose from "mongoose";

import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`);
};

export default connectDB;
