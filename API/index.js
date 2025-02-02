import express from 'express';
import  'dotenv/config';
import connectDb from './Config/connection.js';
import vendorRouter from './Routes/vendorRoutes.js';
import cors from 'cors'

const app = express();
connectDb();

app.use(express.json());
app.use(cors())
app.get('/',(req,res)=>{
    res.send("hello baby");
})



app.use("/api/vendor",vendorRouter)

const port =  process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`listning on port ${port}`)
})