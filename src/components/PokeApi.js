import { useState, useEffect} from "react";

const PokeApi = () => {

    const [pokemonList,setPokemonList] = useState([]);

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/ability/?limit=10')
      .then((data)=> data.json())
      .then((data)=>setPokemonList(data.results))
    }, [])

    return(

        <div>
        <ul>
            {pokemonList.map((pokemon)=>
            (<li>{pokemon.name}</li>
            ))}
        </ul>
        
        </div>
    );
}

export default PokeApi;