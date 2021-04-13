import Link from 'next/link'

export default function Detail({name, image, height, weight, types, abilities, number, id}){
    return(
        <div className="card mt-5 " style={{width: '780px'}} >
            <div className="row w-100 m-0">
                <div className="d-flex pt-3 justify-content-center">
                    <h3 className="card-title text-capitalize">{name}</h3>
                    <p className="my-auto">#{number}</p>         
                </div>
                <div className="row">
                <Link href={`/detail?id=${ id > 1 ? id - 1 : 151 }`}>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <a className="text-black"><i className="fas fa-chevron-left p-4" style={{cursor: 'pointer'}}></i></a>
                    </div>
                </Link>

                <div className="col-4 p-0 d-flex justify-content-center align-items-center">
                    <img src={image} alt={name} style={{maxHeight:'250px'}}/>
                </div>
            
                <div className="col p-0 d-flex justify-content-start">
                    <div className="card-body pe-0 ps-0">

                        <div className="d-flex row justify-content-between mt-2 mb-2">
                            <div className="col-md-6">
                                <h6>Height</h6>
                                <p className="fs-6" >{height}</p>
                            </div>
                            <div className="col-md-6">
                                <h6>Type</h6>
                                {types.map((type,i) => <p className="fs-6" key={i}>{type.type.name}</p>)}
                            </div>
                        </div>

                        <div className="d-flex row justify-content-between">
                            <div className="col-md-6">
                                <h6>Weight</h6>
                                <p className="fs-6">{weight}</p>
                            </div>
                            <div className="col-md-6">
                                <h6>Abillities</h6>
                                {abilities.map((ability,i) => <p className="fs-6" key={i}>{ability.ability.name}</p>)}
                            </div>
                        </div>
                    </div>  
                    
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <Link href={`/detail?id=${ parseInt(id) < 151 ? parseInt(id) + 1 : 1 }`}>
                        <a className="text-black"><i className="fas fa-chevron-right p-4" style={{cursor: 'pointer'}}></i></a>
                        </Link> 
                    </div>
                    <div className="text-center p-0">    
                        <Link href="/">
                            <a className="text-center mb-3 p-0 m-0">Go home</a>
                        </Link>
                    </div>
                </div>
            </div>
           
        </div>
    )
}



