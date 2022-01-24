import Image from "next/image"
import { useRouter } from 'next/router'
import Link from 'next/link'


const Opcion1 = ({id, url}) => {
    const router = useRouter()
     return (
         <section className='seccionGeneralPrototipos'>            
            <section>
                <Image src={url} alt={id} width="350" height="190"/>
            </section>
            <section >
                <h3>Prototipo {id+1}</h3>
                <p>Cabaña con dos habitaciones, cocina y baño.</p>
                <div className='effect-3'>
                    <Link  type="button" href={'/detallePrototipo'} id={id} url={url}>
                        PERSONALÍZALO AHORA
                    </Link>
                </div> 

            </section>
        </section>
     )
    
}

const Opcion2 = ({id, url}) => {
    const router = useRouter()
    return (
        <section className='seccionGeneralPrototipos'>            
           <section >
               <h3>Prototipo {id+1}</h3>
               <p>Cabaña con dos habitaciones, cocina y baño.</p> 
               <div className='effect-3'>
                    <Link  type="button" href={'/detallePrototipo'} id={id} url={url}>
                        PERSONALÍZALO AHORA
                    </Link>
                </div> 
           </section>
           <section>
               <Image src={url} alt={id} width="350" height="190"/>
           </section>
       </section>
    )
   
}


const PrototipoGeneral = ({id, url}) => {
    return (
        <section>
        {id % 2 ==! 0 ? <Opcion1 id={id} url ={url} /> : <Opcion2 id={id} url ={url} />}       
        </section>
    )
}



export default PrototipoGeneral
