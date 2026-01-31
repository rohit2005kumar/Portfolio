
import axios from "axios"
import { useEffect } from "react"
const download=async()=>{
  // const data= await axios.get('http://localhost:8080/download',{responseType:"blob"})
  // console.log(data)
  window.location.href="http://localhost:8080/download"

}

export default download;