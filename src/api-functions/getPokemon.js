import axios from "axios"

const getPokemon = async (id)=>{
  return await axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
};
export default getPokemon;