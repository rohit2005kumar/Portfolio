import api from "./api"
export const login=async ({username,password})=>{
const response= await api.post("/admin/login",{username,password})
console.log(response.data)
return response.data

}
export const getme=async()=>{
    const response=await api.get('/admin/getme')
    // console.log(response)
    return response.data
}
 export const logout=async()=>{
    const response=await api.get('/admin/logout')
    return response.data}