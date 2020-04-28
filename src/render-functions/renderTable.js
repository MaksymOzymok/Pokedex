import {characterizationTable} from "./rendered-comp";



const renderTable = (pokemon,pokemonId)=>{
    characterizationTable.innerHTML = '';
     let pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1,pokemon.name.length);
     let type = '';
      pokemon.types.forEach(value => {
         type += value.type.name;
         type += ', '
     });
    characterizationTable.innerHTML = `
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png"  class="table-avatar"/> 
    <h2 class="table-name">${pokemonName}</h2>
    <table class="table">
    <tr>
    <td>Type</td>
    <td>${type.slice(0,type.length-2)}</td>
</tr>
<tr>
<td>Attack</td>
  <td>${pokemon.stats[4].base_stat}</td>
</tr>
<tr>
<td>Defense</td>
  <td>${pokemon.stats[3].base_stat}</td>
</tr>
<tr>
<td>HP</td>
  <td>${pokemon.stats[5].base_stat}</td>
</tr>
<tr>
<td>SP Attack</td>
  <td>${pokemon.stats[2].base_stat}</td>
</tr>
<tr>
<td>SP Defense</td>
  <td>${pokemon.stats[1].base_stat}</td>
</tr>
<tr>
<td>Speed</td>
  <td>${pokemon.stats[0].base_stat}</td>
</tr>
<tr>
<td>Weight</td>
  <td>${pokemon.weight}</td>
</tr>
<tr>
<td>Total moves</td>
  <td>${pokemon.moves.length}</td>
</tr>
</table> `

};
export default renderTable;