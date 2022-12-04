<<<<<<< HEAD
import {AppContext} from "../contexts/AppContext";
import React from "react";

export function Form(props) {
    var value= React.useContext(AppContext);
    return (
        <form className="row g-10 align-items-center">
            <div className="mb-3 col-7 align-items-center">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3 col-7 align-items-center">
                <label className="form-label">Apellido</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3 col-7 align-items-center">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
            </div>
           {/* <div className="dropdown">
                 <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                </button>
                <ul className="dropdown-menu">
                    {props.productos.map((prod) => {
                        return (
                            <li><a className="dropdown-item" href="#">{prod}</a></li>
                        )
                    })}
                    
                </ul>
            </div> */}
            {/* <p>{value.cont}</p> */}


            {/* <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Tarjeta de devito</a></li>
                    <li><a className="dropdown-item" href="#">Tarjeta de credito</a></li>
                    <li><a className="dropdown-item" href="#">Otro</a></li>
                        
                </ul>
            </div> */}
            <button type="submit" classNameName="btn btn-primary col-7 align-items-center">Submit</button>
        </form>
    )
=======
import {AppContext} from "../contexts/AppContext";
import React from "react";

export function Form(props) {
    var value= React.useContext(AppContext);
    return (
        <form className="row g-10 align-items-center">
            <div className="mb-3 col-7 align-items-center">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3 col-7 align-items-center">
                <label className="form-label">Apellido</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3 col-7 align-items-center">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
            </div>
           {/* <div className="dropdown">
                 <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                </button>
                <ul className="dropdown-menu">
                    {props.productos.map((prod) => {
                        return (
                            <li><a className="dropdown-item" href="#">{prod}</a></li>
                        )
                    })}
                    
                </ul>
            </div> */}
            {/* <p>{value.cont}</p> */}


            {/* <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Tarjeta de devito</a></li>
                    <li><a className="dropdown-item" href="#">Tarjeta de credito</a></li>
                    <li><a className="dropdown-item" href="#">Otro</a></li>
                        
                </ul>
            </div> */}
            <button type="submit" classNameName="btn btn-primary col-7 align-items-center">Submit</button>
        </form>
    )
>>>>>>> eed8f6816805a5f9779eafa38c5fc1c54b51f99c
}