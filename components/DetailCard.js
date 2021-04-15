import Link from 'next/link'
import stylesType from '../services/stylesType'

export default function DetailCard({name, image, height, weight, types, abilities, number}){
    return(
        <div className="card mt-md-5 bg-light shadow-lg rounded"  >
            <div className="row w-100 m-0">

                <div className="d-flex pt-3 justify-content-center">
                    <h2 className="card-title text-capitalize">{name}</h2>
                    <p className="my-auto">#{number}</p>         
                </div>

                <div className="col-sm p-0 d-flex justify-content-center align-items-center">
                    <img src={image} alt={name} style={{width:'275px'}}/>
                </div>
        
                <div className="col p-0 d-flex justify-content-start">
                    <div className="card-body pe-0 ps-0">

                        <div className="d-flex text-center mt-md-3 text-sm-start">
                            <div className="col">
                                <h6 className="fs-5">Height</h6>
                                <p className="fs-6 text-capitalize" >{height} cm</p>
                            </div>
                            <div className="col">
                                <h6 className="fs-5">Type</h6>
                                {types.map((type,i) => <div className="btn border border-secondary d-block me-auto ms-auto mb-1 mr-1 m-md-0 mb-md-1 p-1 w-75" key={i} style={{ backgroundColor: stylesType[type.type.name]}}>{type.type.name}</div>)}
                            </div>
                        </div>

                        <div className="d-flex d-flex text-center text-sm-start">
                            <div className="col">
                                <h6 className="fs-5">Weight</h6>
                                <p className="fs-6 text-capitalize">{weight} kg</p>
                            </div>
                            <div className="col">
                                <h6 className="fs-5">Abilities</h6>
                                {abilities.map((ability,i) => <p className="fs-6 text-capitalize" key={i}>{ability.ability.name}</p>)}
                            </div>
                        </div>

                    </div>  
                </div>

                <div className="text-center p-0 mb-3">    
                    <Link href="/">
                        <a className="btn border border-dark p-2 text-center mb-3 p-0 m-0 go-home">Go home</a>
                    </Link>
                </div>

            </div>
        </div>
        
    )
}



