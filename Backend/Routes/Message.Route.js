import express from 'express'
import { AddMessage, getMessage } from '../Controller/Message.Controller.js'
import { protect } from '../Middleware/Auth.middleware.js'
import { adminOnly } from '../Middleware/Admin.Middleware.js'

const router= express.Router()

router.post("/",AddMessage)
router.get("/",protect,adminOnly,getMessage)
export default router