import connectedPeople from "../Models/connected-person-model.js"

export const connectedPeopleController = async (req, res) => {
    try {
        const result = await connectedPeople.find();
        if (!result) res.status(400).json({ message: "No Peopele Connected" });
        res.status(200).json({ message: "founded people", allPeople: result })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}
export const saveConnectedPeopleData=async (req,res) => {
    try {
        const{name,message,email,subject}=req.body;
    const result=await connectedPeople.create({name,message,subject,email
    })
     res.status(200).json({message:'Data sent Successfully'}) 
    
    } catch (error) {
        res.status(500).json({message:error.message})
    }

    
}