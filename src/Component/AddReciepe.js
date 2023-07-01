
import { ReciepeContext } from "../reciepeContext"
import "./style.css"
import React, { useContext, useState } from 'react'

export default function AddReciepe() {
  const [addBtn,setAddBtn] = useState(false)
    const {reciepe,reciepeDetail,setReciepeDetail,setReciepe,addReciepe, setAddReciepe} = useContext(ReciepeContext)

  const onchangeHandle = (event,value)=>{
    let namme = event.target.name;
    console.log(namme,value)
    let splitvalue;
    if(namme === "ingredient" || namme === "instruction" ){
      value = value.split(",")
    }

    setAddReciepe({
      ...addReciepe,[namme]:value
    })
  }  
  const addReciepeItem = () => {
    setReciepe([...reciepe,addReciepe]);
    setAddBtn(false);
    localStorage.setItem("reciepe",JSON.stringify(reciepe));
  }

  console.log(addReciepe);
  return (
    <div className="add-container">
      <div>
      <button className="add-btn" onClick={()=>setAddBtn(true)}>Add Reciepe</button>
      </div>
      {addBtn && <div className="add-reciepe">
        <label> Name: 
          <input name ="name"onChange = {(e)=>onchangeHandle(e,e.target.value)}type="text"/>
        </label>
        <label> Cuision: 
          <input name ="cuisine" onChange = {(e)=>onchangeHandle(e,e.target.value)}  type="text"/>
        </label>
        <label> Ingredient: 
          <textarea name ="ingredient"  onChange = {(e)=>onchangeHandle(e,e.target.value)} type="text"/>
        </label>
        <label> Instruction: 
          <textarea name="instruction" onChange = {(e)=>onchangeHandle(e,e.target.value)} type="text"/>
        </label>
        <div>
          <button onClick={addReciepeItem}>Add Reciepe</button>
        </div>
        </div>}
      </div>
  )
}
