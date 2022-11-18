import React from 'react'

function Card({nombre,pecio,descripcion}) {

  return (
    
    <div>
        <h3>{nombre}</h3>
        <span>{pecio}</span>
        <p>{descripcion}</p>
        
    </div>
  )
}

export default Card