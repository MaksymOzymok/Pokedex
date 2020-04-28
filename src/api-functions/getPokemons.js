import axios from "axios";

 const getPokemons = async (baseUrl,amount=12)=> {
   return await axios.get(`${baseUrl}/api/v1/pokemon/?limit=${amount}`);
};

 export default getPokemons;