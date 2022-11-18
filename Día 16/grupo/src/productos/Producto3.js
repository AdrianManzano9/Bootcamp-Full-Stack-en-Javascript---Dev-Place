import React from "react";
import imagenCamp1 from "./../imagenes/camp1.webp"
import imagenCamp2 from "./../imagenes/camp2.webp"
import imagenCamp3 from "./../imagenes/camp3.webp"
import { Card } from "./Card";

const cards = [
    {
        id:1,
        img:imagenCamp1,
        titulo:"Entrenamiento",
        descripcion:"CAMPERA ARGENTINA TIRO 23 ALL-WEATHER22",
        precio:"Precio: $16.000"
    },
    {
        id:2,
        img:imagenCamp2,
        titulo:"Entrenamiento",
        descripcion:"CAMPERA ARGENTINA TIRO 23 ALL-WEATHER",
        precio:"Precio: $16.000"
        
    },
    {
        id:3,
        img:imagenCamp3,
        titulo:"Indumentaria",
        descripcion:"BUZO CON CAPUCHA ARGENTINA 3 TIRAS CIERRE FRONTAL",
        precio:"Precio: $16.000"
    }
]
function Producto3() {
  return (
    <div className="grid-container">
      <div className="row">
        {
            cards.map(card =>(
                <div className="col-md-4" key={card.id}>
                    <Card
                    img={card.img}
                    titulo={card.titulo}
                    descripcion={card.descripcion}
                    precio={card.precio}
                    />
                </div>
            ))
        }
      </div>
    </div>
  );
}
export default Producto3;