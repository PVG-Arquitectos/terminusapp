import Image from "next/image"
import Link from 'next/link'
import { useState } from "react";
import { DragDropContext, Droppable, Draggable, resetServerContext } from "react-beautiful-dnd";
import { renderToString } from 'react-dom/server';

const initialParts = [
    {
      id: "1",
      text: "Habitación 18 m2",
    },
    {
      id: "2",
      text: "Baño",
    },
    {
      id: "3",
      text: "Jacuzzi",
    },
    {
      id: "4",
      text: "Habitación 12 m2",
    },
  ];

  const availableParts = [
    {
      id: "5",
      text: "Habitación 20 m2",
    },
    {
      id: "6",
      text: "Baño",
    },
    {
      id: "7",
      text: "Cocina integral",
    },
    {
      id: "8",
      text: "Habitación 12 m2",
    },
  ];
  

resetServerContext();


  const reorder = (list, startIndex, endIndex) => {
      const result = [...list]
      const [removed] = result.splice(startIndex, 1)
      result.splice(endIndex, 0, removed)

      return result
  }



const DetallePrototipo = ({id, url}) => {

    const [partes, setPartes] = useState(initialParts)

    return (
        
        <section className='container'>
            <section className='main'>
                <h3>Prototipo 1</h3>
                    <section className='seccionGeneralPrototipos'>            
                        <section>
                            <Image src='https://pvgarquitectos.com/wp-content/uploads/2021/12/LAR-1.png' alt={id} width="500" height="250"/>
                            <p>Render original</p>
                        </section>
                        <section >
                            
                            <p>Características:</p>
                            <p>$42000.000</p>
                            <p>Habitaciones: 2</p>
                            <p>Jacuzzi: 1</p>
                            <p>Baños: 1</p>
                            <p>Gama de acabados: Media</p>
                        </section>
                    </section>
                    <DragDropContext onDragEnd={(res) => {
                        const {source, destination} = res;
                        if (!destination){
                            return                        
                        }
                        if (source.index === destination.index && source.droppableId === destination.droppableId) {
                            return
                        }
                        setPartes(prevPartes => reorder(prevPartes, source.index, destination.index))
                                        }} >
                    <section className='seccionGeneralPrototipos'>  
                        <section>
                            <h3>ESPACIOS DE LA CASA: </h3>
                            <Droppable droppableId="espaciosCasa">
                                {(droppableProvided) => (
                                    <ul {...droppableProvided.droppableProps}
                                    ref={droppableProvided.innerRef}
                                    className='partes-casa-container'>
                                        {partes.map( (parte, index) => (
                                            <Draggable 
                                            key={parte.id} 
                                            draggableId={parte.id}
                                            index={index}
                                            >
                                                { (draggableProvided) => (
                                                    <li {...draggableProvided.draggableProps}
                                                    ref={draggableProvided.innerRef}
                                                    {...draggableProvided.dragHandleProps}
                                                    className='parte-casa-item' >
                                                        {parte.text}
                                                    </li>
                                                )}
                                            </Draggable>
                                            
                                        ))}
                                        {droppableProvided.placeholder}
                                    </ul>
                                )}
                            </Droppable>

                        </section>
                        <section>
                            <h3>ESPACIOS DISPONIBLES</h3>
                            <Droppable droppableId="espaciosDisponibles">
                                {(droppableProvided) => (
                                        <ul {...droppableProvided.droppableProps}
                                        ref={droppableProvided.innerRef}
                                        className='partes-casa-container'>
                                            {availableParts.map( (parte, index) => (
                                                <Draggable 
                                                key={parte.id} 
                                                draggableId={parte.id}
                                                index={index}
                                                >
                                                    { (draggableProvided) => (
                                                        <li {...draggableProvided.draggableProps}
                                                        ref={draggableProvided.innerRef}
                                                        {...draggableProvided.dragHandleProps}
                                                        className='parte-casa-item' >
                                                            {parte.text}
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {droppableProvided.placeholder}
                                        </ul>
                                    )}
                            </Droppable>
                        </section>
                    </section>
                    </DragDropContext>
            </section>
        </section>
        
    )
}

export default DetallePrototipo
