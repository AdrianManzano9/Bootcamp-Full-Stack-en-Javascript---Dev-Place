import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Padre } from './componentes/Padre';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Padre />)



// let boton = <button onClick={listarNombres}>Resumen de productos</button>
// root.render(boton);

// function listarNombres() {
//     root.render(


//         productos.map((producto) => {
//             return (
//                 <>
//                     <h3 key={productos.id}>{producto.nombre}</h3>
//                 </>
//             )
//         })


//     )

// }

root.render(
   <App />
   )




