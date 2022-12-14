import { useState, useContext } from "react";
import AppContext from "../contexts/AppContext";

export function FormCategories(){
    const { productos, categories, mostrarDatos } = useContext(AppContext)
    const [inputs, setInputs] = useState({});

    const editCategory = (category) => {
        setInputs({
            id: category.id,
            name: category.name,
        })
    }

    const deleteCategory = (id) => {
        fetch(`http://127.0.0.1:5050/category/${id}`, {
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
                console.log(response.json())
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
        console.log(inputs)
        if (Object.values(inputs).length >= 1) {
            if (inputs.id !== undefined) {
                fetch(`http://127.0.0.1:5050/category/${inputs.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': localStorage.getItem("token")
                    },
                    body: JSON.stringify(inputs)
                }).then(response => response.json().then(e => { alert(e.message) }))
            } else {
                fetch('http://127.0.0.1:5050/category', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': localStorage.getItem("token")
                    },
                    body: JSON.stringify(inputs)
                }).then(response => response.json().then(e => { alert(e.message) }))
                    
            }
            setInputs({})
            mostrarDatos()

        } else {
            alert("Faltan datos")
        }
    }
    return (
        <div id="Reg-category">
            <div id="form-cont">
                <h3>Registrar Categorias</h3>
                <form onSubmit={handleSubmit} className="row g-8 align-items-center  form" >


                    <div>
                        <label className="form-label">Nombre de la categoria</label>
                        <input
                            name="name"
                            value={inputs.name || ""}
                            onChange={handleChange} className="form-control  h-25" row="2" />
                    </div>
                   
                    <button type="submit" className="my-4 col-7align-items-center m-auto">Enviar</button>
                </form>

                
                <table id="t-Categ">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre de Categoria</th>
                            <th colSpan="2">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((c) => {
                            return (
                                < tr key={c.id}>
                                    <th>{c.id}</th>
                                    <td>{c.name}</td>
                                    <td><button onClick={() => editCategory(c)}>Editar</button></td>
                                    <td><button onClick={() => deleteCategory(c.id)}>Eliminar</button></td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>

            </div>
        </div >
    )


}