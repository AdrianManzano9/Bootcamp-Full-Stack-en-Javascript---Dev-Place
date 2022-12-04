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
            console.table(inputs)
            alert("Guadado Exitosamente")
        } else{
            alert("Faltan datos") 
        }
    }
    return (
        <>
            <div id="marca-general">
                <h3>Suscribete para recibir las mejores ofertas y promociones especiales</h3>
                <img src="https://www.fayerwayer.com/resizer/j-ddZDyqpTn13t5BrLW4YSMi35k=/arc-photo-metroworldnews/arc2-prod/public/37E67NHO3BFOTBGYIG5KBIGPN4.jpg" className="img-fluid"/>
    
            </div>
            <form onSubmit={handleSubmit} className="row g-8 align-items-center  form" id="Suscrib">
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
                <button type="submit" className="my-4 col-7 btn-primary align-items-center m-auto">Suscribirse</button>
            </form>
        </>
    )
}