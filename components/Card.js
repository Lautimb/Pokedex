import Link from 'next/link'

export default function Card({name,image, number, id}){
    
    return(
        <>   
            <div className="col pe-1 me-2 ms-2 ps-1 card-container">
                <Link href={`/detail?id=${id}`}>
                    <div className="card m-1 mx-auto mt-4 mb-5 bg-light shadow " style={{width: '20em', cursor: 'pointer'}}>
                        <img src={ image } className="card-img-top m-auto " alt={name} style={{width: '250px'}}/>
                            <div className="card-body bg-white">
                                <h5 className="card-title text-center text-capitalize">{name}</h5>         
                                <p className="text-center">#{number}</p>
                            </div>
                    </div>
                </Link>
            </div>
        </>       
    )

}
