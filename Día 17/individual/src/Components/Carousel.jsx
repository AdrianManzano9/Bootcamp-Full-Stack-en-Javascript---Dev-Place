import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { productos } from "../productos"

export function Carousel() {
  let { setCount } = useContext(AppContext)

  return (
    <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {productos.map(function (prod, indice) {
          if (indice < 4) {
            return (
              <div className="carousel-item" key={indice}>
                <div className=" d-flex flex-wrap justify-content-center">
                  <img src={prod.linkImg} className="rounded d-block w-50" alt={prod.nombre} />
                  <div className="carousel-text d-flex flex-column w-25 mx-1 align-self-center">
                    <h3>${prod.precio}</h3>
                    <p>{prod.descrip}</p>
                    {
                      prod.cant === 0 ? <button type="button" className='compar' onClick={() => { prod.cant += 1; setCount((c) => c + 1) }}>Comprar</button>
                        :
                        <div className="d-flex flex-row count">
                          <button onClick={() => { prod.cant -= 1; setCount((c) => c - 1) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                          </svg></button>
                          <span className='align-self-center h-100'>{prod.cant}</span>
                          <button onClick={() => { prod.cant += 1; setCount((c) => c + 1) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                          </svg></button>
                        </div>
                    }
                  </div>
                </div>
              </div>
            )
          }
        })
        }
        <div className="carousel-item active ">
          <div className=" d-flex flex-wrap justify-content-center">
            <img src={productos[4].linkImg} className="rounded d-block w-50" alt={productos[4].nombre} />
            <div className="carousel-text d-flex flex-column w-25 mx-1 align-self-center">
              <h3>${productos[4].precio}</h3>
              <p>{productos[4].descrip}</p>
              {
                productos[4].cant === 0 ? <button type="button" className='compar' onClick={() => { productos[4].cant += 1; setCount((c) => c + 1) }}>Comprar</button>
                  :
                  <div className="d-flex flex-row count">
                    <button onClick={() => { productos[4].cant -= 1; setCount((c) => c - 1) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg></button>
                    <span className='align-self-center h-100'>{productos[4].cant}</span>
                    <button onClick={() => { productos[4].cant += 1; setCount((c) => c + 1) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg></button>
                  </div>
              }
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

