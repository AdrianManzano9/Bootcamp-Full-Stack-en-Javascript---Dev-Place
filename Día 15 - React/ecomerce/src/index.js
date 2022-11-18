import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Article } from './componentes/article';

const root = ReactDOM.createRoot(document.getElementById('root'));
let productos = [
  {
      id:0,
      linkImg: "https://images.fravega.com/f300/2cca0c581600f32e27c94ad996696693.jpg.webp",
      descrip: "'Lenovo Notebook Lenovo IdeaPad' 14 4GB 256GB Core i3 81WA00D8AR",
      precio: "$129.999",
  },
  {
      id:1,
      linkImg: "https://images.fravega.com/f300/a7a64fe0c101384de5abfe6143bc1eb0.jpg.webp",
      descrip: "Celular Samsung Galaxy S20 FE 5G 128GB Azul",
      precio: "$129.999",
  },
  {
      id:2,
      linkImg: "https://images.fravega.com/f300/560713a6415e62862d5fb8b51db32490.jpg.webp",
      descrip: "'Smart TV 55' QLED 4K Samsung QN55Q65BAGCF",
      precio: "$159.999",
  }
];

root.render(
  <>
  {productos.map((props) => {
      return (
          
              <div className="card" style="width: 18rem;" key = {props.id}>
                  <img src={props.linkImg} className="card-img-top" alt="Foto" />
                  <div className="card-body">
                      <h5 className="card-title">{props.precio}</h5>
                      <p className="card-text">{props.descrip}</p>
                      <a href="" className="btn btn-primary">Comprar</a>
                  </div>
              </div>
          
      )
  })}
  </>
)
