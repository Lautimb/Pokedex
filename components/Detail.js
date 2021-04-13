import Link from 'next/link'

export default function Detail({name, image, height, weight, types, abilities, number, id}){
    return(
        <div className="card mt-5 " style={{width: '780px'}} >
            <div className="row">
                <Link href={`/detail?id=${ id > 1 ? id - 1 : 151 }`}>
                    <a className="col-1 text-black " ><i className="fas fa-chevron-left p-4" style={{cursor: 'pointer'}}></i></a>
                </Link>
                <div className="col-3 p-0 d-flex justify-content-center position-relative">
                    <img src={image} alt={name} style={{height:'250px'}}/>
                </div>
                <div className="col p-0 d-flex justify-content-start">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="me-2"><h4 className="card-title text-capitalize">{name}</h4></div>
                            <p className="my-auto">#{number}</p>
                        </div>
                        <div className="d-flex row justify-content-between">
                            <div className="col-3">
                                <h6>Height</h6>
                                <p>{height}</p>
                            </div>
                            <div className="col-3">
                                <h6>Type</h6>
                                {types.map((type,i) => <p key={i}>{type.type.name}</p>)}
                            </div>
                        </div>
                        <div className="d-flex row justify-content-between">
                            <div className="col-3">
                                <h6>Weight</h6>
                                <p>{weight}</p>
                            </div>
                            <div className="col-3">
                                <h6>Abillities</h6>
                                {abilities.map((ability,i) => <p key={i}>{ability.ability.name}</p>)}
                            </div>
                        </div>

                    </div>  
                </div>
                <Link href={`/detail?id=${ parseInt(id) < 151 ? parseInt(id) + 1 : 1 }`}>
                    <a className="col-1"><i className="fas fa-chevron-right p-4" style={{cursor: 'pointer'}}></i></a>
                </Link>
            </div>
            <Link href="/">
                <a className="text-center mb-3">Go home</a>
            </Link>
        </div>
    )
}



