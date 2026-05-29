import jwt from 'jsonwebtoken'
const CheckIsAuthenticated=async(req,res,next)=>{
try {
   const token=req.cookies.token
    if(!token)return res.status(404).json({message:'token not found please login'});
    const decode=jwt.verify(token,process.env.SECRET)
    req.user=decode
    next()
    
} catch (error) {
    res.status(400).json({message:error.message})
}
}
export default CheckIsAuthenticated;