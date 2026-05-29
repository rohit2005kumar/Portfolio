import api from "./api"

export const allProjectsFunction=async () => {
  const response=  await api.get('/project/allprojects')

  return response.data.allprojects;
    
}