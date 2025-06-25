import React from "react";
import '../Style/Card.css'
import { Link,useParams } from "react-router-dom";
import Charmander from '../image/Charmander.png'
import Squirt from '../image/Squirt3.jpg'
import Bulvasor from '../image/Bulvasor.jpg'
import YouWin from '../image/YouWin.png'
import YouLose from '../image/YouLose.png'
import PlayAgain from '../image/PlayAgain.png'

let Pokemones = [
  {
    id: "0",
    name: "Charmander",
    imagen: Charmander,
    Description: "charmander is a Fire type pokémon. Fire type pokémon are strong against Plant, Ice, Bug, Steel, Fairy type pokémon but weak against Fire, Water, Rock, Dragon type pokémon"
  },
  {
    id: "1",
    name: "Squirt",
    imagen: Squirt,
    Description: "Squirtle is a Water type pokémon. Water type pokémon are strong against Fire, Earth, Rock type pokémon but weak against Water, Plant, Dragon, Electric type pokémon."
  },
  {
    id: "2",
    name: "Bulvasor",
    imagen: Bulvasor,
    Description: " bulbasaur is a Plant and Poison type pokémon. Plant type pokémon are strong against Water, Earth, Rock type pokémon but weak against Fire, Plant, Poison, Flying."
  },

]

function Card(name, imagen, description) {

  return (
      <div
        className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src={imagen} alt="pokemon" />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>{name}</h3>
          <div className="description-pokemon">
            {description}
          </div>
        </div>
      </div>
  )
}


export function Card2() {
  return (
    <div className="container-primary">
      {Pokemones.map((pokemon, index) => {
        return (
          <Link to={{
            pathname: `/game/${pokemon.name}`,
            state: "any type"}}>
            <div key={index}>
              {Card(pokemon.name, pokemon.imagen, pokemon.Description)}
            </div>
        </Link>

        )
      })}
    </div>
  )
}

function Result(chosen, random){
  if (chosen==random){
    return(
    <Link to={{
      pathname: `/`,
      state: "any type"}}>
      <img
      className="img-result"
      src={PlayAgain}
      alt="logo de PlayAgain">
      </img>
    </Link>)
  }

  else if ((chosen==0) && (random==2) || (chosen==1) && (random==0) || (chosen==2) && (random==1)){
    return(
    <div >
      <img
      className="img-result"
      src={YouWin}
      alt="logo de YouWin">
      </img>

      <Link to={{
      pathname: `/`,
      state: "any type"}}><img
      className="img-result"
      src={PlayAgain}
      alt="logo de PlayAgain"
      ></img>
      </Link>
    </div>)
  }
  else {
    return(
    <div>
      <img
      className="img-result"
      src={YouLose}
      alt="logo de YouLose">
      </img>

      <Link to={{
      pathname: `/`,
      state: "any type"}}><img
      className="img-result"
      src={PlayAgain}
      alt="logo de PlayAgain"
      >
      </img>
      </Link>
    </div>)
  }

}


export function ChosenPokemo(){
  let {pokemon} =useParams()

  let num2=4

  let num = Math.floor(Math.random()* 3)

  let PokemonRandom= Card(Pokemones[num].name,Pokemones[num].imagen,Pokemones[num].Description) 

  let PokemonSelect=Pokemones.map((chosen,index)=>{
    if (chosen.name=== pokemon){
      num2=chosen.id
      return(<div key={index}>{Card(chosen.name,chosen.imagen,chosen.Description)}</div>)}
  })

  return(<div>
    <div className="container-primary">
    {PokemonSelect}
    {Result(num2,num)}
    {PokemonRandom}
    </div>
    </div>)

}









