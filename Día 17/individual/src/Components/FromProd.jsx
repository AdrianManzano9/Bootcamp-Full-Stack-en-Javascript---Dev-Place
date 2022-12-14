import { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import AppContext from "../contexts/AppContext";



export function FormProd() {
    const { productos, categories, mostrarDatos } = useContext(AppContext)
    const [inputs, setInputs] = useState({});
    const imgLink = useRef()
    const editProd = (prod) => {
        setInputs({
            id: prod.id,
            CategoryId: prod.categories.id,
            // linkImg: prod.linkImg,
            descrip: prod.descrip,
            precio: prod.precio,
            cantD: prod.cantD
        })
        imgLink.current.value = prod.linkImg;
    }

    const deleteProd = (id) => {
        fetch(`http://127.0.0.1:5050/product/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then(response => {
            if (response.status === 200) {
                alert('Borrado exitosamente')
            } else if (response.status === 403) {
                response.json().then(e => { alert(e.message) })
            } else {
                alert('Error')
                console.log(response)
            }
        })
        mostrarDatos()

    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData  = new FormData(); 
        formData.append("descrip", inputs.descrip)
        formData.append("CategoryId", inputs.CategoryId)
        formData.append("precio", inputs.precio);
        formData.append("file", imgLink.current.files[0])
        formData.append("cantD", inputs.cantD)
        if (Object.values(inputs).length >= 4) {
            if (inputs.id !== undefined) {
                fetch(`http://127.0.0.1:5050/product/${inputs.id}`, {
                    method: 'PUT',
                    headers: {
                        'x-access-token': localStorage.getItem("token")
                    },
                    body: formData
                }).then(response => response.json().then(e => { alert(e.message) }))
            } else {

                fetch('http://127.0.0.1:5050/product', {
                    method: 'POST',
                    headers: {
                        'x-access-token': localStorage.getItem("token")
                    },
                    body: formData,
                }).then(response => response.json().then(e => { alert(e.message) }))

            }

            setInputs({})
            imgLink.current.value = "";
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


                    <div>
                        <label className="form-label">Descripcion del producto.</label>
                        <textarea
                            name="descrip"
                            value={inputs.descrip || ""}
                            onChange={handleChange} className="form-control  h-25" row="2" />
                    </div>
                    <div>
                        <select name="CategoryId" value={inputs.CategoryId} onChange={handleChange} placeholder="Categoría">
                            <option>Categoría</option>
                            {
                                categories.map(cat => {
                                    return (<option key={cat.id} value={cat.id}>{cat.name}</option>)
                                })

                            }
                        </select>
                        <Link to={'./Categories'} ><span className="badge rounded-pill text-bg-primary">+</span></Link>
                    </div>
                    <div>
                        <label className="form-label">Precio del producto.</label>
                        <input
                            name="precio"
                            value={inputs.precio || ""}
                            onChange={handleChange} type="number" className="form-control  h-25" />
                    </div>



                    <div>
                        <label htmlFor="formFile" className="form-label">Foto del producto</label>
                        <input className="form-control" id="formFile"type="file" name="img-link" ref={imgLink} />
                    </div>




                    <div>
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
                            <th>Categoria</th>
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
                                    <td>{prod.categories.name}</td>
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