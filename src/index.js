import getPokemons from "./api-functions/getPokemons";
import getPokemon from "./api-functions/getPokemon";
import renderPokemons from "./render-functions/renderPokemons";
import renderTable from "./render-functions/renderTable";
import {btn,pokemonsContainer} from "./render-functions/rendered-comp";
import './styles.css'


const BASE_URL = 'https://pokeapi.co';

let amountOfPokemons = 12;
    getPokemons(BASE_URL,amountOfPokemons).then(res=>{
        renderPokemons(res.data.results);
    });

getPokemon(4).then(res=>renderTable(res.data,4));
btn.addEventListener("click",function () {
amountOfPokemons += 6;
    getPokemons(BASE_URL,amountOfPokemons).then(res=>{
        renderPokemons(res.data.results);
    });
});

pokemonsContainer.addEventListener("click",function (event) {
  const clickedId= event.target.parentNode.id;
  if(clickedId===''){
      return;
  }else {
    getPokemon(clickedId).then(res=>renderTable(res.data,clickedId));

  }
});
