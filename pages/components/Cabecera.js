import Link from 'next/link'

const Cabecera = () => {
    return (
        <ul>
            <li>
                <Link href='/'>
                    Inicio
                </Link>
            </li>
            <li>
                <Link href='/contacto' >
                    Contacto
                </Link>
            </li>
        </ul>
    )
}

export default Cabecera