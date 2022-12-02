import React from "react";
import imagenShort1 from "./../imagenes/shortT.webp"
import imagenShort2 from "./../imagenes/ShortS.webp"
import imagenShort3 from "./../imagenes/shortB.webp"
import { Card } from "./Card";

const cards = [
    {
        id:1,
        img:imagenShort1,
        titulo:"Titular - Black",
        descripcion:"Pantalon titular OSCURO - Mundial Qatar 2022",
        precio:"Precio: $16.000"
    },
    {
        id:2,
        img:imagenShort2,
        titulo:"Suplente",
        descripcion:"Pantalon suplente - Mundial Qatar 2022",
        precio:"Precio: $16.000"
        
    },
    {
        id:3,
        img:imagenShort3,
        titulo:"Titular - White",
        descripcion:"Pantalon titular CLARO - Mundial Qatar 2022",
        precio:"Precio: $16.000"
    }
]
function Producto2() {
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
export default Producto2;