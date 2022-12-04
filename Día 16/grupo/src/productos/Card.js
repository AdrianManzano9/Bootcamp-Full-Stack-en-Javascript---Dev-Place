<<<<<<< HEAD
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
=======
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
>>>>>>> eed8f6816805a5f9779eafa38c5fc1c54b51f99c
