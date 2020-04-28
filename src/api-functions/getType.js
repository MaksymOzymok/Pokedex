
    import axios from "axios"

const getTypes = async ()=>{
    return await axios.get('https://pokeapi.co/api/v2/type')
};
export default getTypes;