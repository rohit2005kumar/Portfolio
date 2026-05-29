import api from "./api";
export const uploadFile=async(data)=>{
  const response = await  api.post('/project/addproject',data)
  return response
}
export const updateResume=async (resume) => {
    const response=await api.post('/project/updateresume',resume)
    return response.data

    
}
export const uploadAssets=async(filesData)=>{
  const response= await api.post('/project/uploadassets',filesData)
  console.log(filesData)
  // console.log(response.data)
  return response.data


}