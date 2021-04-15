import { useState } from 'react'
import AppLayout from '../components/AppLayout'
import Card from '../components/Card'
import getAllPokemon from '../services/getAllPokemon'

export default function Home({pokemon}) {
  const [ pokemonList , setPokemonList ] = useState(pokemon)

  const search = (e) =>{
    const pokeFilter = pokemon.filter( pokeman => pokeman.name.includes(e.target.value.toLowerCase()))
    setPokemonList(pokeFilter) 
  }

  return (
    <div className="container-fluid p-0">
      <AppLayout title = "Home | Poke-App">
       
          <div className="d-flex justify-content-center ">
            <img className="w-100 banner" src="/banner.png" alt="banner" style={{maxWidth: '1200px'}}/>
          </div>
          <div className="d-flex mt-3 justify-content-center">
              <input onChange={search} className="form-control search-input shadow" style={{width: '25em'}} type="text" name="search" placeholder="Search Pokemon"/>
              <div className="position-relative mt-auto mb-auto search-icon">
                <i className="fas fa-search"></i>
              </div>
          </div>
          
          <div className="w-100 padding-home list-container">
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
