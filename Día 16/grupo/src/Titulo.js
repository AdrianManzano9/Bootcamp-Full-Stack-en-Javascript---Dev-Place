function HijoDeHijo(){
    return<h2>Tienda digital</h2>
}
function Hijo(){
    return<div>
            <h2 style={{color:"white"}}>Argentina - AFA</h2>
            <HijoDeHijo/>
        </div>
    
}
function Padre(){
    return(
        <div className="titulo">
            <h1 style={{fontWeight:"bolder"}} >Tienda de Seleccion</h1>
            <Hijo></Hijo>
        </div>
    )
}
export default Padre;