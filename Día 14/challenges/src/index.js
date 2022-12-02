import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const myFirstElement = <h1>Hola JSX</h1>
// root.render(myFirstElement);

let listaUsuarios = [
  {
    id: 1,
    nombre: "Fulanito",
  },
  {
    id: 2,
    nombre: "Miguel",
  },
  {
    id: 3,
    nombre: "Franco",
  }
];


root.render(<table><tr><td>Id</td><td>Nombre</td></tr>{listaUsuarios.map(User => {
 return <tr><td>{User.id}</td><td>{User.nombre}</td></tr>
})}</table>);


// function Auto() {
//   return <h1>Soy un Auto</h1>;
// }

// class Auto extends React.Component{
//   render(){
//     return <h1>Soy un Auto</h1>;
//   }
// }

// function Auto(props) {
//   return <h1>Soy un Auto {props.color}</h1>;
// }

// root.render(<Auto color="rojo" />);

function Auto() {
  return <h2>Soy un Auto</h2>;
}

function Garage() {
  return (
    <>
      <h1>Quién sos vos?</h1>
      <Auto />
    </>
  );
}

// root.render(<Garage/>)

