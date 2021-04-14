import Link from 'next/link'

export default function Detail({name, image, height, weight, types, abilities, number}){
    return(
        <div className="card mt-md-5" style={{width: '780px'}} >
            <div className="row w-100 m-0">

                <div className="d-flex pt-3 justify-content-center">
                    <h3 className="card-title text-capitalize">{name}</h3>
                    <p className="my-auto">#{number}</p>         
                </div>

                <div className="col-sm-4 p-0 d-flex justify-content-center align-items-center">
                    <img src={image} alt={name} style={{maxWidth:'250px'}}/>
                </div>
        
                <div className="col p-0 d-flex justify-content-start">
                    <div className="card-body pe-0 ps-0">

                        <div className="d-flex text-center text-sm-start">
                            <div className="col">
                                <h6>Height</h6>
                                <p className="fs-6" >{height}</p>
                            </div>
                            <div className="col">
                                <h6>Type</h6>
                                {types.map((type,i) => <p className="fs-6" key={i}>{type.type.name}</p>)}
                            </div>
                        </div>
                        <div className="d-flex d-flex text-center text-sm-start">
                            <div className="col">
                                <h6>Weight</h6>
                                <p className="fs-6">{weight}</p>
                            </div>
                            <div className="col">
                                <h6>Abillities</h6>
                                {abilities.map((ability,i) => <p className="fs-6" key={i}>{ability.ability.name}</p>)}
                            </div>
                        </div>
                    </div>  
                </div>

                <div className="text-center p-0">    
                    <Link href="/">
                        <a className="text-center mb-3 p-0 m-0">Go home</a>
                    </Link>
                </div>

            </div>
        </div>
        
    )
}



