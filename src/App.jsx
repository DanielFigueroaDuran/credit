//..................................Poke_Api--------------------------
import { cardCredit } from "./components/User.js";
import {Credit} from "./components/Credit.jsx";
import { people } from "./components/people.js";
import { UserCard } from "./components/UserCard.jsx";
import { CardPokemon } from "./components/CardPokemon.jsx";
import { pokemons } from "./components/pokeApi.js";
import ButtonList from "./components/ButtonList.jsx";
import  Graphics  from "./components/Graphics.jsx";
import { graphics } from "./components/graphics.js";


function App  ()  {
  return (
    <div className="container">

       {/* {console.log(cardCredit)}

      {cardCredit.map((card, i) => <Credit card={card} key={i} />)} */}

       {/* {people.map((user, i) => (
        <UserCard user={user} key={i} />
      ))} */}

      
           
       {/* {pokemons.map((cardPoke, i) => (<CardPokemon cardPoke={cardPoke} key={i} />))} */}         
     
       {/* <ButtonList num ={31} /> */}
      
      
        <div className="container_graphics">
            <h1>30 Days Of React</h1>
            <h2>World population</h2>
            <span>Ten most populated countries</span>
            </div>
            <div className="graphics">
            {graphics.map((graphicsCountry, i) => (< Graphics graphicsCountry={graphicsCountry} key={i} />))}        
        </div>     
      
    </div>
  )
}


export default App