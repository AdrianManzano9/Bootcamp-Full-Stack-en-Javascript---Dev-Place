import { useState, useContext } from "react";
import AppContext from "../contexts/AppContext";

export function FormProd() {
    const {productos, mostrarDatos} = useContext(AppContext)
    const [inputs, setInputs] = useState({});
    
    const editProd = (prod) => {
        setInputs({
            id: prod.id,
            nombre: prod.nombre,
            linkImg: prod.linkImg,
            descrip: prod.descrip,
            precio: prod.precio,
            cantD: prod.cantD
        })
    }

    const deleteProd = (id) => {
        fetch(`http://127.0.0.1:5050/product/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then(
            alert("Borrado Exitosamente"))
        mostrarDatos()

    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(inputs).length >= 5) {
            if (inputs.id !== undefined) {
                fetch(`http://127.0.0.1:5050/product/${inputs.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': localStorage.getItem("token")
                    },
                    body: JSON.stringify(inputs)
                }).then(
                    alert("Actualizado Exitosamente"))
            } else {
                fetch('http://127.0.0.1:5050/product', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': localStorage.getItem("token")
                    },
                    body: JSON.stringify(inputs)
                }).then(
                    alert("Guadado Exitosamente"))
            }
            setInputs({})
            mostrarDatos()
            
        } else {
            alert("Faltan datos")
        }
    }
    return (
        <div id="Reg-produc">
            <div id="form-cont">
                <h3>Registrar Producto</h3>
                <form onSubmit={handleSubmit} className="row g-8 align-items-center  form" >
                    <div className=" align-items-center">
                        <label className="form-label">Nombre del producto.</label>
                        <input
                            name="nombre"
                            value={inputs.nombre || ""}
                            onChange={handleChange} type="text" className="form-control h-25" />
                    </div>
                    <div className=" align-items-center">
                        <label className="form-label">Descripcion del producto.</label>
                        <textarea
                            name="descrip"
                            value={inputs.descrip || ""}
                            onChange={handleChange} className="form-control  h-25" row="2" />
                    </div>
                    <div className=" align-items-center">
                        <label className="form-label">Precio del producto.</label>
                        <input
                            name="precio"
                            value={inputs.precio || ""}
                            onChange={handleChange} type="number" className="form-control  h-25" />
                    </div>
                    <div className=" align-items-center">
                        <label className="form-label">Link Imagen.</label>
                        <input
                            name="linkImg"
                            value={inputs.linkImg || ""}
                            onChange={handleChange} type="text" className="form-control  h-25" />
                    </div>

                    <div className=" align-items-center">
                        <label className="form-label">Cantiadad disponible.</label>
                        <input
                            name="cantD"
                            value={inputs.cantD || ""}
                            onChange={handleChange} type="number" className="form-control  h-25" />
                    </div>
                    <button type="submit" className="my-4 col-7align-items-center m-auto">Enviar</button>
                </form>
                <table id="t-prods">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>L. Imagen</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Cantidad disponible</th>
                            <th colSpan="2">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((prod) => {
                            return (
                                < tr key={prod.id}>
                                    <th>{prod.id}</th>
                                    <td>{prod.nombre}</td>
                                    <td>{prod.linkImg}</td>
                                    <td>{prod.descrip}</td>
                                    <td>{prod.precio}</td>
                                    <td>{prod.cantD}</td>
                                    <td><button onClick={() => editProd(prod)}>Editar</button></td>
                                    <td><button onClick={() => deleteProd(prod.id)}>Eliminar</button></td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>

            </div>
        </div >
    )
}