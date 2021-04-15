import Link from 'next/link'
export default function Header(){
    return (
        <header className='navbar d-flex justify-content-around'>   
            <Link href='/'>
                <a className='nav-link active p-0' aria-current='page'><img src='/pikachu.png' alt='pikachu' style={{width: '60px'}} /></a>
            </Link>
            <div className='text-center pt-2'>
                <h1 className='text-white p-0 m-0'>Pokédex</h1>
            </div>
            <Link href='/'>
                <a className='nav-link active p-0' aria-current='page'><img src='/ultra-bola.png' alt='pokeball' style={{width: '60px'}} /></a>
            </Link>

        </header>
    )
}