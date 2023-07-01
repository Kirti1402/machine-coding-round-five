import { createContext, useState } from "react";
import {reciepes} from "./reciepe"

export const ReciepeContext = createContext();

export const ReciepeContextProvider = ({children})=>{
    const [reciepe,setReciepe] = useState(reciepes)
    const [addReciepe, setAddReciepe] = useState({
        name:"",
        cuisine:"",
        ingredient:[],
        instruction:[]
    })

    const [reciepeDetail,setReciepeDetail] = useState({})
    localStorage.setItem("reciepeDetail", JSON.stringify(reciepeDetail))



    return <ReciepeContext.Provider value={{reciepe,reciepeDetail,setReciepeDetail,setReciepe,addReciepe, setAddReciepe}}>
        {children}
    </ReciepeContext.Provider>
}
