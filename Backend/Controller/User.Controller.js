import User from '../Models/User.model.js'

export const addMessage=async(req,res)=>{
    const {name,email}=req.body

    const Message=await User.create(req.body)

    res.json(Message)

}

export const getMessage=async(req,res)=>{
    const user=await User.find({})
    res.json(user)
}