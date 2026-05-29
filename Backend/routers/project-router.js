import express from 'express'
import uploadFile from '../services/upload-multer.js'
import { addproject, allProjects,assetsAccess,updateResume, uploadAssets } from '../controllers/projects-controllers.js'
const router =express.Router()
router.get('/allprojects',allProjects)
router.post('/addproject',uploadFile.single('image'),addproject)
router.post('/updateresume',uploadFile.single('resume'),updateResume)
router.post('/uploadassets', uploadFile.fields([
      { name: "homeImage", maxCount: 1 },
      { name: "aboutImage", maxCount: 1 },
      { name: "resume", maxCount: 1 }
   ]),uploadAssets)
   router.get('/assets',assetsAccess)
export default router