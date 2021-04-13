import AppLayout from '../components/AppLayout'
import Detail from '../components/Detail'
import getPokemonById from '../services/getPokemonById'
export default function detail({pokeman,id}){

  return (
    <div className="container-fluid p-0">
      <AppLayout title = "Detail | Poke-App">
        <h2 className="text-center mt-5 mb-5">Detail</h2>
        <div className="d-flex justify-content-center">
            <Detail 
              abilities={pokeman.abilities} 
              height={pokeman.height} 
              image={pokeman.image} 
              id= {id}
              name={pokeman.name} 
              number={pokeman.number}
              types={pokeman.types}
              weight={pokeman.weight}
              />
        </div>
      </AppLayout>
    </div>
      
  )
}

export async function getServerSideProps({query}){
  return getPokemonById(query)
}




