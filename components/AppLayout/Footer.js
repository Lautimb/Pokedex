import Link from 'next/link' 

export default function Footer() {
    return(
        <footer>
            <div className='d-flex justify-content-center'>
                <div>
                    <p className='mt-3 fs-4'>Developed by Lautaro Barandiaran</p>
                    <p className='fs-6 text-center'>Full Stack Developer</p>

                    <div className='d-flex justify-content-center'>
                        <Link href='https://github.com/Lautimb'>
                            <a><i className='fab fa-github'></i></a>
                        </Link>
                        <Link href='https://linkedin.com/in/barandiaranlautaro/'>
                            <a><i className='fab fa-linkedin'></i></a>
                        </Link>
                        <Link href='https://instagram.com/barandiaranlautaro'>
                            <a><i className='fab fa-instagram'></i></a>                    
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}