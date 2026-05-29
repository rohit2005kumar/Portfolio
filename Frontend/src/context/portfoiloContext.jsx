import { createContext, useEffect, useState } from "react";
import { assetsFunction } from "../services/portfoilo";

export const portfoiloContext=createContext()
export const PortfoiloContextProvider=({children})=>{
    const [assets,SetAssets]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
  const accessAssets=async()=>{
    const data= await assetsFunction()
    SetAssets(data);
    setLoading(false)
  }
  accessAssets()
    },[])

    return <portfoiloContext.Provider value={{assets,SetAssets,loading,setLoading}}>
{children}
    </portfoiloContext.Provider>
}