import React from "react";
import imagen1 from "./../imagenes/Titular.webp"
import imagen2 from "./../imagenes/Suplente.jpg"
import imagen3 from "./../imagenes/Arquero.webp"
import { Card } from "./Card";

const cards = [
    {
        id:1,
        img:imagen1,
        titulo:"Titular",
        descripcion:"Camiseta titular - Mundial Qatar 2022",
        precio:"Precio: $16.000"
    },
    {
        id:2,
        img:imagen2,
        titulo:"Suplente",
        descripcion:"Camiseta suplente - Mundial Qatar 2022",
        precio:"Precio: $16.000"
        
    },
    {
        id:3,
        img:imagen3,
        titulo:"Arquero",
        descripcion:"Camiseta arquero - Mundial Qatar 2022",
        precio:"Precio: $16.000"
    }
]
function Producto1() {
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
export default Producto1;
