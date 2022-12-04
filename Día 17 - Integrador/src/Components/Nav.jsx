import CarritoB from '../Img/CarritoB.png'
import { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { Link } from 'react-router-dom';
import { productos } from '../productos';
import { SwitchTransition, CSSTransition } from "react-transition-group";


export function Nav(props) {
    const { search, setSearch, count } = useContext(AppContext);

    const handleSearch = (event) => {
        event.preventDefault();
        setSearch(search);
    }

    return (
        <nav className="navbar bg-light" id="nav">
            <div className="container-fluid">
                <Link to='/' href='#carouselExampleDark' className="navbar-brand">E-comerse</Link>
                <form className="d-flex w-50" role="search" onSubmit={handleSearch}>
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                </form>


                <ul className="navbar-nav flex-row justify-content-evenly fs-6">
                    <li className="nav-item mx-4">
                        <Link to='/Form' className="nav-link active" aria-current="page">Suscribete</Link>
                    </li>
                    <li className="nav-item mx-4">
                        <div className='d-flex flex-nowrap'>
                            <SwitchTransition>
                                <CSSTransition
                                    key={count}
                                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                                    classNames='fade'
                                >
                                    <p className='' id='count'>{productos.filter((prod) => { return (prod.cant > 0) }).length}</p>
                                    </CSSTransition>
                            </SwitchTransition>
                            <Link to='/Cart'> <img id='i-cart' src={CarritoB} alt="Carrito" /></Link>
                             </div>
                    </li>

                </ul>

            </div>

        </nav >
    )
}

