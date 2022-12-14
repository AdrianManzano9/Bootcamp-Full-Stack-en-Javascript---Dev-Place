import { useContext } from "react"
import { Link } from "react-router-dom"
import AppContext from "../contexts/AppContext"

export function Categories() {
    const { setCategory, categories } = useContext(AppContext)

    return (
        <nav className="navbar navbar-expand-lg" id="Products">
            <div className="d-flex flex-row mb-3 ">
                <div className="navbar-nav">
                    <Link to='/Products' className="nav-link mx-2 text-light py-0" href="#" onClick={() => setCategory("All")}>Todos</Link>
                </div>

                {categories.map(c=>{
                    return(
                        <div className="navbar-nav" key={c.id}>
                        <Link to='/Products' className="nav-link mx-2 text-light py-0" onClick={() => setCategory(c.name)}>{c.name}</Link>
                    </div> 
                    )
                })}


            </div>
        </nav>
    )
}