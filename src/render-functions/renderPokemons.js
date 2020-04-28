import getPokemon from "../api-functions/getPokemon";
import typeColors from "../colors/typeColors";
import {btn,pokemonsContainer,characterizationTable} from "./rendered-comp";

const renderPokemons = (pokemonsArray)=>{
pokemonsContainer.innerHTML = '';
   pokemonsArray.forEach(pokemon=> {
      const pokemonCard = document.createElement('div');
      pokemonCard.className = 'pokemon-card';
      let name = pokemon.name.split('')[0].toUpperCase() + pokemon.name.slice(1,pokemon.name.length);
      let arr = pokemon.url.split('/');
      let id = arr[arr.length-2];
      pokemonCard.id = id;
      pokemonCard.innerHTML = `
<img class="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="">
<h3 class="pokemon-name">${name}</h3>`;
      let pokemonTypes = document.createElement('div');
      pokemonTypes.className = 'types';
      getPokemon(id).then(res=>res.data.types.forEach(type=>{
          let  typeDiv = document.createElement('div');
          typeDiv.className = 'type';
          let bgColor = typeColors.filter(value => value.name === type.type.name);
          typeDiv.style.backgroundColor = bgColor[0].value;
          typeDiv.innerText = `${type.type.name}`;

          pokemonTypes.appendChild(typeDiv);
      }));
      pokemonCard.appendChild(pokemonTypes);
    pokemonsContainer.appendChild(pokemonCard);

  });

   const main = document.querySelector('.main');
   pokemonsContainer.appendChild(btn);
  main.appendChild(pokemonsContainer);
  main.appendChild(characterizationTable);

};
export default renderPokemons;