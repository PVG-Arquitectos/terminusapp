import PrototipoGeneral from "./PrototipoGeneral"
const arrayPrototipos = [
    {id: 0, url: 'https://pvgarquitectos.com/wp-content/uploads/2021/12/LAR-1.png'},
    {id: 1, url: 'https://pvgarquitectos.com/wp-content/uploads/2021/12/LAR-2.png'},
    {id: 2, url: 'https://pvgarquitectos.com/wp-content/uploads/2021/12/LAR-1.png'},
    {id: 3, url: 'https://pvgarquitectos.com/wp-content/uploads/2021/12/LAR-1.png'},
    {id: 4, url: 'https://pvgarquitectos.com/wp-content/uploads/2021/12/LAR-2.png'},
    {id: 5, url: 'https://pvgarquitectos.com/wp-content/uploads/2021/12/LAR-1.png'},

]

const ListaPrototipos = () => {
    return (
            <>
                {arrayPrototipos.map((elemento) => {
                    return (
                    <PrototipoGeneral 
                        id={arrayPrototipos[elemento.id].id} 
                        url={arrayPrototipos[elemento.id].url} 
                        key={arrayPrototipos[elemento.id].id} 
                    />
                    )                    
                })}                 
            </>
           
    )
}
console.log()
export default ListaPrototipos
