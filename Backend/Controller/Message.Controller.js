import {  Message } from "../Models/Message.Model.js";

export const AddMessage=async(req,res)=>{
    const {name,email,phone,budget,lookingFor,desc}= req.body

    const message= await Message.create(req.body)
    res.json(message)
}

export const getMessage=async(req,res)=>{
    const message=await Message.find({})
    res.json(message)
}