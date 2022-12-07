import { useState } from "react";
import { Link } from "react-router-dom";
export function Subsc() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(inputs).length === 4) {
            fetch('http://127.0.0.1:5050/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            }).then(response => response.json()).then(e => {
                console.log(e)
                const data = {
                    email: inputs.email,
                    password: inputs.password
                }
    
                fetch('http://127.0.0.1:5050/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then(response => response.json())
                .then(data => localStorage.setItem("token", data.tokenAccess));
            })
            setInputs({})
            alert("Guadado Exitosamente")
            
        } else {
            alert("Faltan datos")
        }
        
    }
    return (
        <div id="Suscrib">
        <h6>¿Ya tienes una cuenta? <Link to={'./Login'}>Iniciar Sesion</Link></h6>
            <form onSubmit={handleSubmit} className="row g-8 align-items-center  form" >
                <div className=" align-items-center">
                    <label className="form-label">Nombre</label>
                    <input
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange} type="text" className="form-control h-25" />
                </div>
                <div className=" align-items-center">
                    <label className="form-label">Apellido</label>
                    <input
                        name="surname"
                        value={inputs.surname || ""}
                        onChange={handleChange} type="text" className="form-control  h-25" />
                </div>
                <div className=" align-items-center">
                    <label className="form-label">Email</label>
                    <input
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange} type="email" className="form-control  h-25" />
                </div>
                <div className=" align-items-center">
                    <label className="form-label">Contraseña</label>
                    <input
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange} type="password" className="form-control  h-25" />
                </div>
                <button type="submit" className="my-4 col-7 btn-primary align-items-center m-auto">Suscribirse</button>
            </form>
        </div>
    )
}