import { useContext } from "react";
import { portfoiloContext } from "../context/portfoiloContext";

export function usePortfoiloHook(){
    return useContext(portfoiloContext)
}