import AppLayout from '../components/AppLayout'
import Card from '../components/Card'
import getAllPokemon from '../services/getAllPokemon'
import { useState } from 'react'

export default function Home({pokemon}) {
  const [ pokemonList , setPokemonList ] = useState(pokemon)

  const search = (e) =>{
    const key = (e.target.value).toLowerCase()
    const pokeFilter = pokemon.filter( pokeman => pokeman.name.includes(key))
    setPokemonList(pokeFilter) 
  }
  


  return (
    <div className="container-fluid p-0">
      <AppLayout title = "Home | Poke-App">
        
        <div className="d-flex justify-content-center mt-5" >
            <input onChange={search} className="form-control" style={{width: '25em'}} type="text" name="search" placeholder="Search Pokemon"/>
            <i className="fas fa-search position-absolute r-0"></i>
        </div>
        
        <div className="row p-5 pb-0 mb-0" style = {{ margin: '10px 100px 10px 100px'}}>
          {pokemonList.map(( pokemon, index ) => {
            return(
              <Card 
                key={index} 
                name={pokemon.name} 
                image={pokemon.image} 
                number={pokemon.number}
                id= {pokemon.id}
              />
            )
          
          })}
        </div>
        
      </AppLayout>
    </div>
      
  )
}

Home.getInitialProps = async () => {
  return getAllPokemon()
}
