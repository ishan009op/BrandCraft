import express from 'express'
import { AddMessage } from '../Controller/Message.Controller.js'

const router= express.Router()

router.post("/",AddMessage)

export default router