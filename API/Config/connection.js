import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

async function connectDB(){
    try {
        const con=await mongoose.connect(process.env.MONGO_URL,{
              useNewUrlParser: true,
             useUnifiedTopology: true,
        })
        console.log(
            con.connection.host
          );
    } catch (error) {
      console.log(error)
    }
}

export default connectDB;