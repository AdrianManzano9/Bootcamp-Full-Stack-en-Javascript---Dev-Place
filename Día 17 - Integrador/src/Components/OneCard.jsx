import { useState } from "react";

export function OneCard(props) {
    const [count, setCount] = useState(0);
    console.table(props)
    // props.map((prod) => {
    //     return (
    //         <div className="card" key={prod.id}>
    //             <img src={prod.linkImg} className="card-img-top" alt="Foto" />
    //             <div className="card-body">
    //                 {
    //                     prod.cant === 0 ? <button onClick={() => { prod.cant += 1; setCount((c) => c + 1) }}>Comprar</button>
    //                         :
    //                         <div className="d-flex flex-row count">
    //                             <button onClick={() => { prod.cant -= 1; setCount((c) => c + 1) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
    //                                 <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
    //                             </svg></button>
    //                             <span className='align-self-center h-100'>{prod.cant}</span>
    //                             <button onClick={() => { prod.cant += 1; setCount((c) => c + 1) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
    //                                 <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
    //                             </svg></button>
    //                         </div>
    //                 }


    //                 <h5 className="card-title">{prod.precio}</h5>
    //                 <p className="card-text">{prod.descrip}</p>
    //             </div>
    //         </div>
    //     )
    // })
}