import mongoose from "mongoose";

export const connect=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('done');
        
    }).catch((err)=>{
        console.log(err);
        
    })
}