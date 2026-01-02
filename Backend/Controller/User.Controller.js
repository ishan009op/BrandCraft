import User from '../Models/User.model.js'

export const addMessage=async(req,res)=>{
    const {name,email}=req.body

    const existingUser=await User.findOne({email})
    if(existingUser) return res.json("user already existed")
    const user=await User.create(req.body)

    res.json(user)

}

export const getMessage=async(req,res)=>{
    const user=await User.find({})
    res.json(user)
}