

export function Card(props) {
    return(
    <div className="card">
        <img src={props.producto.linkImg} className="card-img-top" alt="Foto" />
        <div className="card-body">
            <h5 className="card-title">{props.producto.precio}</h5>
            <p className="card-text">{props.producto.descrip}</p>
            <a href="#" className="btn btn-primary">Comprar</a>
        </div>
    </div>
    )
}