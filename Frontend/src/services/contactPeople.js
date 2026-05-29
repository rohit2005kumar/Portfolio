import api from "./api"

export const contactPeopleFunction=async () => {
    const response= await api.get('/family/allpeople');
    return response.data
    
}
export const sendContactPeopleData=async (data) => {
  const response=  await api.post('/family/saveuserdata',data)
    return response.data
}
