import React from "react";

export function Card(props) {
  return (
    <div className="card">
        <div className="card-img">
            <img className="card-img" src={props.img}/>
        </div>
      <div className="card-body">
          <h4 className="card-tittle">{props.titulo}</h4>
          <p className="card-text">{props.descripcion}</p>
          <p className="card-text">{props.precio}</p>
      </div>
    </div>
  );
}
