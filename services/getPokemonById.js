import colorsType from '../services/colorsType'

export default async function getPokemonById(query){
    try {
        const id  = query.id
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokeman = await response.json()
        const configIndex = ('00' + (id)).slice(-3)
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${configIndex}.png`
        pokeman.image = image
        pokeman.number = configIndex
       
        return {
          props:{ 
            pokeman,
            id
          }
        }
  
    } catch (error) {
        console.log(error)
    }
}