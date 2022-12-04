import { useState } from "react";

export function FormProd() {
    const [inputs, setInputs] = useState({});

    
        
    

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(inputs).length === 5) {

            fetch('http://127.0.0.1:5050/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem("token")
                },
                body: JSON.stringify(inputs)
            }).then(
                alert("Guadado Exitosamente"))

        } else {
            alert("Faltan datos")
        }
    }
    return (
        <div id="Reg-produc" >
            <div id="form-cont">
                <h3>Registrar Producto</h3>
                <form onSubmit={handleSubmit} className="row g-8 align-items-center  form" >
                    <div className=" align-items-center">
                        <label className="form-label">Nombre del producto.</label>
                        <input
                            name="name"
                            value={inputs.name || ""}
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
                        <label className="form-label">Link imagen.</label>
                        <input
                            name="image"
                            value={inputs.image || ""}
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
                <table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            fetch('http://127.0.0.1:5050/product', {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            }).then(response => response.json())
                                .then(data => {
                                     data.data.map((prod) => {
                                        <tr>
                                           { Object.values(prod)}
                                        </tr>
                                    })
                                })
                        } */}


                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>

                </table>

            </div>
        </div>
    )
}