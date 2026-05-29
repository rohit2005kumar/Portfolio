import { useContext } from "react";
import { authcontext } from "../context/authcontext";
export const useAuthcontext=()=>{
    return useContext(authcontext)
}