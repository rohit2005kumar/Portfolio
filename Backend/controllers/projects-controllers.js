import { Project } from "../Models/Projects.js";
import assetsModle from "../Models/public-assets.js";
import { uploadMultipleFilesToCloudinary, uploadToCloudinary } from "../services/upload-file-function.js";

export const allProjects = async (req, res) => {
    try {
        const allprojects = await Project.find();
        if (!allprojects || allprojects.length === 0) return res.status(400).json({ message: "No Projects Found" });

        res.status(200).json({ allprojects });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const addproject = async (req, res) => {
    try {
        const { title, description, projectlink } = req.body
        // console.log(projectlink)
        // multer check is file available
        if (!req.file) {
            return res.status(400).json({
                message: "Image is required",
            });
        }
        const imageBuffer = req.file

        // upload to cloudinary
        const cloudinaryImage = await uploadToCloudinary(imageBuffer.buffer)
        //save to db
        const newProject = new Project({ title, description, projectlink, image: cloudinaryImage.secure_url });
        await newProject.save()
        res.status(200).json({ message: "upload successfully", project: newProject })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })

    }





}
export const updateResume = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            message: "Image is required",
        });
    }
    const resumeBuffer = req.file
    console.log(resumeBuffer)
    // const resumeLink=await uploadToCloudinary(resumeBuffer) 

    res.send("sending")


}
export const uploadAssets = async (req, res) => {

    const filesArray = Object.values(req.files).flat()
    const imagesobject = {}

    if (filesArray.length == 0) return res.status(400).json({ message: "file not provided" })
    
        try {
    
                    const data = await uploadMultipleFilesToCloudinary(filesArray);
                    const keys = Object.keys(req.files)
                    console.log(keys)
                    data.forEach((item, index) => {
                        imagesobject[keys[index]] = {
                            secure_Url: item.secure_url,
                            url: item.url

                        }
                    })
                    console.log(imagesobject)
                    const deletedAllExistedFiles=await assetsModle.deleteMany();
                    const dataSaveTodb = new assetsModle(imagesobject);
                    await dataSaveTodb.save()
                    res.status(200).json({ message: "updated Successfully" })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })

    }
    //  if(data){}


}
export const assetsAccess=async (req,res) => {
    const assets= await assetsModle.find({});
    if(assets.length<=0) return res.status(400).json({message:"data not found"})
    res.status(200).json({data:assets})

    
}