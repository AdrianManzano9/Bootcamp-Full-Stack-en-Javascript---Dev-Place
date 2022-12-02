import { useContext } from "react"
import {Link } from "react-router-dom"
import AppContext from "../contexts/AppContext"

export function Products() {
    const {setCategory}= useContext(AppContext)

    return (
        <nav className="navbar navbar-expand-lg" id="Products">
            <div className="d-flex flex-row mb-3 ">
            <div className="navbar-nav">
                    <Link to='/Products' className="nav-link mx-2 text-light py-0" href="#" onClick={()=>setCategory("All")}>Todos</Link>
                </div>
                <div className="navbar-nav">
                    <Link to='/Products' className="nav-link mx-2 text-light py-0" href="#" onClick={()=>setCategory("Notebook")}>Notebook</Link>
                </div>
                <div className="navbar-nav">
                    <Link to='/Products' className="nav-link mx-2 text-light py-0" href="#" onClick={()=>setCategory("Celular")}>Celulares</Link>
                </div><div className="navbar-nav">
                    <Link to='/Products' className="nav-link mx-2 text-light py-0" href="#" onClick={()=>setCategory("TV")}>Televisores</Link>
                </div>

            </div>
        </nav>
    )
}