import express from 'express'
import { addMessage, getMessage } from '../Controller/User.Controller.js'
import { protect } from '../Middleware/Auth.middleware.js'
import { adminOnly } from '../Middleware/Admin.Middleware.js'

const router=express.Router()

router.post('/',addMessage)
router.get("/",protect,adminOnly,getMessage)

export default router