import React,{useState} from 'react'
import Card from './Card'

function Productos() {

    const productos = [
        { id:1, nombre: "Samsung Smart TV 32'", precio: 60000,  descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { id:2, nombre: "Samsung Smart TV 43'", precio: 900000,  descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."  },
        { id:3, nombre: "Samsung Smart TV 50'", precio: 150000,  descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    ]

    const [state, setState] = useState();

    const [fecha, setFecha] = useState();


    function btn() {
        setState(
            productos.map(produc => (
                <Card key={produc.id} nombre={produc.nombre}/>
            ))
        )
    }

    function btnFecha() {
        
        let dia = new Date();
        let ahora = dia.toLocaleString();
        setFecha(ahora)
        
    }

  return (
    <div>
        {
            productos.map(produc => (
                <Card key={produc.id} nombre={produc.nombre} precio={produc.precio} descripcion={produc.descripcion}/>
            ))
        }

        <div>
            <button onClick={btn}>Resumen de productos</button>
        </div>
        {
           state 
        }

        <button onClick={btnFecha}>Que fecha es?</button>
        
        <p>{fecha}</p>
        

    </div>
  )
}

export default Productos