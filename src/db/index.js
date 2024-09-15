import mongoose from "mongoose";
import { DB_NAME } from "../constents.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGOD_URL}/${DB_NAME}`);
        console.log(`\n Mongodb connected !! DB HOST${connectionInstance.connect.host}`);
    } catch (error) {
        console.log("Mongodb connnection failed", error);
        process.exit(1);
    }
}

export default connectDB