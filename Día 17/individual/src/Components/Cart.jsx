import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";
import { Link } from "react-router-dom";


export function Cart() {
    const { setCount, count, productos, mostrarDatos } = useContext(AppContext);
    var total = 0;
    const [inputs, setInputs] = useState({});
    const [dateCard, setdateCard] = useState({});

    let filtProd = productos.filter((prod) => {
        return (
            prod.cant > 0
        )
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const cardHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setdateCard(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.values(inputs).length === 4 && inputs.tPago !== "Tarjeta de crédito" && inputs.tPago !== "Tarjeta de débito") {
            guardarOrden(inputs);
            alert("Guadado Exitosamente");

        } else if (Object.values(dateCard).length === 2 && Object.values(inputs).length === 4) {
            const date = { ...inputs, ...dateCard }
            guardarOrden(date);
            alert("Guadado Exitosamente")

        } else {
            console.log(Object.values(inputs))
            alert("Faltan datos")
        }

    }

    const guardarOrden = (date) => {
        fetch('http://127.0.0.1:5050/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            },
            body: JSON.stringify(date)
        }).then(response => response.json()).then(e => {
            filtProd.map((prod) => {
                var date = {
                    orderId: e.data.id,
                    cant: prod.cant,
                    precio: prod.precio,
                    descrip: prod.descrip,
                    prodId: prod.id,
                    cantD: prod.cantD - prod.cant,
                }
                console.log(date);
                fetch('http://127.0.0.1:5050/dOrder', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(date)
                }).then(() => {
                    setInputs({});
                    setdateCard({});
                    mostrarDatos();
                })
            })
        })
    }
    const [time, setTime] = useState(new Date().toLocaleString());
    useEffect(() => {
        setTimeout(() => {
            setTime(new Date().toLocaleString());
        }, 60000);
    });


    return (
        <>

            <div id="cart">
                {
                    count > 0 ?
                        filtProd.map((prod) => {
                            total += (prod.precio * prod.cant)
                            return (
                                <div className="card" key={prod.id}>
                                    <img src={prod.linkImg} className="card-img-top " alt="Foto" />
                                    <div className="card-body">
                                        <div className="d-flex flex-row count">
                                            <button onClick={() => { prod.cant -= 1; setCount((c) => c - 1) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                                            </svg></button>
                                            <span className='align-self-center h-100'>{prod.cant}</span>
                                            <button onClick={() => { prod.cant += 1; setCount((c) => c + 1) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                            </svg></button>
                                        </div>

                                        <h5 className="card-title">$ {prod.precio}</h5>
                                        <p className="card-text">{prod.descrip}</p>
                                    </div>
                                </div>
                            )
                        }) :
                        <div className="d-flex  justify-content-center align-items-center h-100 flex-column" >
                            <h2 className="m-4">Tu carrito esta vacio.  <Link to='/Products' className="navbar-brand link-warning">Llénalo!!</Link></h2>
                            <Carousel />

                        </div>
                }
            </div>
            <form onSubmit={handleSubmit} className=" form p-4">

                <div className="mb-1">
                    <label
                        className="form-label">Dirección</label>
                    <input name="direction"
                        value={inputs.direction}
                        onChange={handleChange} type="text" className="form-control  h-25" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-1">
                    <label
                        className="form-label">Hora de compra: </label>
                    <input name="time"
                        value={inputs.time = time}
                        onChange={handleChange}
                        className="form-control" type="text" disabled />
                </div>
                <div className="mb-1">
                    <select name="tPago" value={inputs.tPago} onChange={handleChange} placeholder="Metodo de pago">
                        <option>Tipo de pago</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Tarjeta de crédito">Tarjeta de crédito</option>
                        <option value="Tarjeta de débito">Tarjeta de débito</option>
                        <option value="Transferencia bancaria">Transferencia bancaria</option>
                    </select>
                </div>

                {
                    inputs.tPago === "Tarjeta de crédito" || inputs.tPago === "Tarjeta de débito" ?
                        <>
                            <div className="mb-1 d-flex flex-row flex-wrap">
                                <div>
                                    <label
                                        className="form-label w-75">Numero de la tarjeta</label>
                                    <input name="nTarjeta"
                                        value={inputs.nTarjeta}
                                        onChange={cardHandleChange} type="number" className="form-control  h-50 w-75" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div>
                                    <label
                                        className="form-label  ">Fecha de caducidad</label>
                                    <input name="fTarjeta"
                                        value={inputs.fTarjeta}
                                        onChange={cardHandleChange} type="date" className="form-control  h-50" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>

                        </> : <></>
                }

                <div>
                    <label className="form-label">Total a pagar: </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input name="total"
                            value={inputs.total = total}
                            onChange={handleChange} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" disabled />
                    </div>

                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>


        </>
    )
}
