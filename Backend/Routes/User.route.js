import express from 'express'
import { addMessage, getMessage } from '../Controller/User.Controller.js'

const router=express.Router()

router.post('/',addMessage)
router.get("/",getMessage)

export default router