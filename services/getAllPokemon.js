export default async function getAllData(){
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        const { results } = await response.json()
        const pokemon = results.map(( result, i ) => {
        const configIndex = ('00' + (i + 1)).slice(-3)
        const id = i + 1
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${configIndex}.png`
          return {
            ...result,
            image,
            number: configIndex,
            id 
          }
        })
        return{
          pokemon    
        }
      } catch (error) {
        console.log(error)
      }
}

