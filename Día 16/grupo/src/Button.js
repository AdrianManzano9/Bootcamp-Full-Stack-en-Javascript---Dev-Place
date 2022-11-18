import React, {useState} from 'react'

const mostrarResumen = () =>{
    return(
    <div>
        <ul>
            <li>Titular</li>
            <li>Suplente</li>
            <li>Arquero</li>
        </ul>
    </div>
    )
}

function Button() {
  return (
    <button onClick={ e => mostrarResumen()}></button>
  )
}

<button type="button" class="btn btn-primary">Primary</button>
export default Button