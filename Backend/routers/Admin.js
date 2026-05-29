import express from 'express'
import CheckIsAuthenticated from '../middleware/CheckisAuthenticated.js'
import { loginController,signupcontroller,getUserInfo,logout,  } from '../controllers/Admin.js'
import uploadFile from '../services/upload-multer.js'
const  router=express.Router()  
router.post('/login',loginController)
router.post('/signup',signupcontroller)
router.get('/getme',getUserInfo)
router.get('/logout',logout)

// router.post('/addproject',,addproject)
// router.get('/logout',)
export default router;