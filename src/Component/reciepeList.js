import { ReciepeContext } from "../reciepeContext"
import AddReciepe from "./AddReciepe"
import "./style.css"
import React, { useContext } from 'react'
import {Link} from "react-router-dom"



export default function ReciepeList() {
 

  const {reciepe,reciepeDetail,setReciepeDetail,setReciepe} = useContext(ReciepeContext)

  const onDeleteHandle = (reciepeitem,index) =>{
    deleteReciepeItem(reciepeitem,index);
  }
  const deleteReciepeItem = (reciepeItem,index) => {
    console.log("Delete",reciepeItem);
    const updatedReciepe = reciepe;
    updatedReciepe.splice(index, 1);
    console.log("updated",updatedReciepe)
    setReciepe([...updatedReciepe]);
    localStorage.setItem("reciepe",JSON.stringify(reciepe));
}
const reciepess =JSON.parse(localStorage.getItem("reciepe"));
const reciepeList = reciepess??reciepe;
console.log("eiei",reciepeList)
  console.log(reciepe)
  return (<div>
    <AddReciepe/>
    <div className="recipe-component">{reciepeList && reciepeList.map((recipe,index) => (
      <div key={recipe.name} className="recipe-card">
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
        <div className="recipe-details">
          <div className="recipe-name">{recipe.name}</div>
          <div className="recipe-cuisine"><span>Cuision Type: </span>{recipe.cuisine}</div>
          <p className="recipeList-ingredients"><span>Ingredient</span><span><Link to="/recipedetail" onClick={()=>setReciepeDetail(recipe)}>See Reciepe</Link><span>	
          &#x279F;</span></span></p>
          <p className="recipeList-ingredients"><span>Instruction</span><span><Link to="/recipedetail" onClick={()=>setReciepeDetail(recipe)}>See Reciepe</Link><span>	
          &#x279F;</span></span></p>

        </div>
        <div className="edit-delete-btn">
        <button class="edit-button"><i class="fas fa-edit"></i></button>
          <button class="delete-button" onClick={()=> onDeleteHandle(recipe,index)}><i class="fas fa-trash-alt"></i> </button>
        </div>
      </div>
    ))}</div>

  </div>
  )
}

