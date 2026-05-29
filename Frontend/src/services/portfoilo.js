import api from "./api";

export async function assetsFunction(params) {
    const res= await api.get('project/assets')
    // console.log("protfilo context checking",res.data)
    return res.data.data

}