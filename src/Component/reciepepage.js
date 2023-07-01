import React, { useContext } from 'react'
import { ReciepeContext } from '../reciepeContext'


export default function Reciepepage() {
    const {reciepeDetail} = useContext(ReciepeContext)
  return (
    <div className="recipe-component">{ reciepeDetail && 
        <div key={reciepeDetail.name} className="recipe-card">
          <img src={reciepeDetail.image} alt={reciepeDetail.name} className="recipe-image" />
          <div className="recipe-details">
            <div className="recipe-name">{reciepeDetail.name}</div>
            <div className="recipe-cuisine"><span>Cuision Type: </span>{reciepeDetail.cuisine}</div>
            <hr/>
            <div className="recipe-ingredients">
                <div>Ingredient:</div>
                <div>
              {reciepeDetail.ingredients.map(ingredient => (
                <div key={ingredient} className="recipe-ingredient">{ingredient}</div>
              ))}
              </div>
            </div>
            <hr/>
            <div className="recipe-ingredients">
                <div>Instruction:</div>
                <div>
              {reciepeDetail.instructions.map(ingredient => (
                <div key={ingredient} className="recipe-ingredient">{ingredient}</div>
              ))}
              </div>
            </div>
          </div>
        </div>
      }</div>
  )
}
