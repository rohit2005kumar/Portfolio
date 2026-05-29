import express from 'express'
import { connectedPeopleController, saveConnectedPeopleData } from '../controllers/connected-people-controllers.js'
const router=express.Router()
router.get('/allpeople',connectedPeopleController)
router.post('/saveuserdata',saveConnectedPeopleData)
export default router