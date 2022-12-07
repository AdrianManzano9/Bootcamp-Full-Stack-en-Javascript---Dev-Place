import { useState } from "react";

export function Form() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(inputs).length === 3) {
            fetch('http://127.0.0.1:5050/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            }).then(response => response.json())
                .then(data => localStorage.setItem("token", data.tokenAccess));
            alert("Registredo exitosamente")
            setInputs({})
        } else {
            alert("Faltan datos")
        }
    }
    return (
            <form onSubmit={handleSubmit} className="row g-8 align-items-center form" >
                 <div className=" align-items-center">
                    <label className="form-label">Nombre</label>
                    <input
                        name="surname"
                        value={inputs.surname || ""}
                        onChange={handleChange} type="text" className="form-control" />
                </div>
                <div className=" align-items-center">
                    <label className="form-label">Email</label>
                    <input
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange} type="email" className="form-control" />
                </div>
                <div className=" align-items-center">
                    <label className="form-label">Contraseña</label>
                    <input
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange} type="password" className="form-control" />
                </div>
                <button type="submit" class="btn btn-success">Suscribirse</button>
            </form>
    )
}