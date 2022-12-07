import { useState } from "react";
import { Link } from "react-router-dom";
export function Login() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(inputs).length === 2) {
            fetch('http://127.0.0.1:5050/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            }).then(response => response.json())
                .then(data => localStorage.setItem("token", data.tokenAccess));
            alert("Secion Iniciada")
            setInputs({})
        } else {
            alert("Faltan datos")
        }
    }
    return (
        <div id="Login">
            <h6>¿No tienes una cuenta? <Link to={'../'}>Registrate</Link></h6>
            <form onSubmit={handleSubmit} className="row g-8 align-items-center  form" >

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