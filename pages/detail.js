import AppLayout from '../components/AppLayout'
import DetailCard from '../components/DetailCard'
import getPokemonById from '../services/getPokemonById'
import Link from 'next/link'
export default function detail({pokeman,id}){

  return (
    <div className="container-fluid p-0">
      <AppLayout title = "Detail | Poke-App">
        <h2 className="text-center mt-5 mb-md-0 mb-5">Detail</h2>
        <div className="d-flex justify-content-center card-container">

            <Link href={`/detail?id=${ id > 1 ? id - 1 : 151 }`}>
                <div className="col-1 d-flex justify-content-center align-items-center">
                    <a className="text-black"><i className="fas fa-chevron-left " style={{cursor: 'pointer'}}></i></a>
                </div>
            </Link>

            <DetailCard 
              abilities={pokeman.abilities} 
              height={pokeman.height * 10} 
              image={pokeman.image} 
              name={pokeman.name} 
              number={pokeman.number}
              types={pokeman.types}
              weight={pokeman.weight / 10}
            />
        
            <Link href={`/detail?id=${ parseInt(id) < 151 ? parseInt(id) + 1 : 1 }`}>
              <div className="col-1 d-flex justify-content-center align-items-center">
                <a className="text-black"><i className="fas fa-chevron-right " style={{cursor: 'pointer'}}></i></a>
              </div>
            </Link> 
            
        </div>
      </AppLayout>
    </div>
      
  )
}

export async function getServerSideProps({query}){
  return getPokemonById(query)
}




