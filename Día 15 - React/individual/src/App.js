import React, { Component, useState } from 'react';
import './App.css';
import { Card } from './componentes/Card';

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.productos = [
//       {
//         id: 0,
//         linkImg: "https://images.fravega.com/f300/2cca0c581600f32e27c94ad996696693.jpg.webp",
//         nombre: "Notebook",
//         descrip: "'Lenovo Notebook Lenovo IdeaPad' 14 4GB 256GB Core i3 81WA00D8AR",
//         precio: "$129.999",
//       },
//       {
//         id: 1,
//         linkImg: "https://images.fravega.com/f300/a7a64fe0c101384de5abfe6143bc1eb0.jpg.webp",
//         nombre: "Celular",
//         descrip: "Celular Samsung Galaxy S20 FE 5G 128GB Azul",
//         precio: "$129.999",
//       },
//       {
//         id: 2,
//         linkImg: "https://images.fravega.com/f300/560713a6415e62862d5fb8b51db32490.jpg.webp",
//         nombre: "TV",
//         descrip: "'Smart TV 55' QLED 4K Samsung QN55Q65BAGCF",
//         precio: "$159.999",
//       },
//       {
//         id: 3,
//         linkImg: "https://images.fravega.com/f300/2cca0c581600f32e27c94ad996696693.jpg.webp",
//         nombre: "Notebook",
//         descrip: "'Lenovo Notebook Lenovo IdeaPad' 14 4GB 256GB Core i3 81WA00D8AR",
//         precio: "$129.999",
//       },
//       {
//         id: 4,
//         linkImg: "https://images.fravega.com/f300/a7a64fe0c101384de5abfe6143bc1eb0.jpg.webp",
//         nombre: "Celular",
//         descrip: "Celular Samsung Galaxy S20 FE 5G 128GB Azul",
//         precio: "$129.999",
//       },
//       {
//         id: 5,
//         linkImg: "https://images.fravega.com/f300/560713a6415e62862d5fb8b51db32490.jpg.webp",
//         nombre: "TV",
//         descrip: "'Smart TV 55' QLED 4K Samsung QN55Q65BAGCF",
//         precio: "$159.999",
//       },
//       {
//         id: 6,
//         linkImg: "https://images.fravega.com/f300/2cca0c581600f32e27c94ad996696693.jpg.webp",
//         nombre: "Notebook",
//         descrip: "'Lenovo Notebook Lenovo IdeaPad' 14 4GB 256GB Core i3 81WA00D8AR",
//         precio: "$129.999",
//       },
//       {
//         id: 7,
//         linkImg: "https://images.fravega.com/f300/a7a64fe0c101384de5abfe6143bc1eb0.jpg.webp",
//         nombre: "Celular",
//         descrip: "Celular Samsung Galaxy S20 FE 5G 128GB Azul",
//         precio: "$129.999",
//       },
//       {
//         id: 8,
//         linkImg: "https://images.fravega.com/f300/560713a6415e62862d5fb8b51db32490.jpg.webp",
//         nombre: "TV",
//         descrip: "'Smart TV 55' QLED 4K Samsung QN55Q65BAGCF",
//         precio: "$159.999",
//       },
//       {
//         id: 9,
//         linkImg: "https://images.fravega.com/f300/2cca0c581600f32e27c94ad996696693.jpg.webp",
//         nombre: "Notebook",
//         descrip: "'Lenovo Notebook Lenovo IdeaPad' 14 4GB 256GB Core i3 81WA00D8AR",
//         precio: "$129.999",
//       },
//       {
//         id: 10,
//         linkImg: "https://images.fravega.com/f300/a7a64fe0c101384de5abfe6143bc1eb0.jpg.webp",
//         nombre: "Celular",
//         descrip: "Celular Samsung Galaxy S20 FE 5G 128GB Azul",
//         precio: "$129.999",
//       },
//       {
//         id: 11,
//         linkImg: "https://images.fravega.com/f300/560713a6415e62862d5fb8b51db32490.jpg.webp",
//         nombre: "TV",
//         descrip: "'Smart TV 55' QLED 4K Samsung QN55Q65BAGCF",
//         precio: "$159.999",
//       }
//     ];
//     this.state = {
//       variable: this.productos
//     }
//   }


//   // var variable = productos;
//   categoria(i) {
//     this.setState({
//       variable: this.productos.filter((producto) => {
//         return (producto.nombre === i)
//       })
//     })
//     // variable = productos.filter((producto) => {
//     //  return( producto.nombre === i)
//     // })
//     console.log(this.state.variable)
//   }
//   render() {
//     return (
//       <div className="App">
//         <header>
//           <button onClick={() => { this.categoria("Notebook") }}>Notebooks</button><button>Celulares</button><button>Televisores</button>
//         </header>
//         <main>
//           {this.state.variable.map((prod) => {
//             return (
//               <Card producto={prod} key={prod.id} />
//             )
//           })}
//         </main>

//       </div>
//     )
//   }
// }
function App() {

  const productos = [
    {
      id: 0,
      linkImg: "https://images.fravega.com/f300/2cca0c581600f32e27c94ad996696693.jpg.webp",
      nombre: "Notebook",
      descrip: "'Lenovo Notebook Lenovo IdeaPad' 14 4GB 256GB Core i3 81WA00D8AR",
      precio: "$129.999",
    },
    {
      id: 1,
      linkImg: "https://images.fravega.com/f300/a7a64fe0c101384de5abfe6143bc1eb0.jpg.webp",
      nombre: "Celular",
      descrip: "Celular Samsung Galaxy S20 FE 5G 128GB Azul",
      precio: "$129.999",
    },
    {
      id: 2,
      linkImg: "https://images.fravega.com/f300/560713a6415e62862d5fb8b51db32490.jpg.webp",
      nombre: "TV",
      descrip: "'Smart TV 55' QLED 4K Samsung QN55Q65BAGCF",
      precio: "$159.999",
    },
    {
      id: 3,
      linkImg: "https://images.fravega.com/f300/2cca0c581600f32e27c94ad996696693.jpg.webp",
      nombre: "Notebook",
      descrip: "'Lenovo Notebook Lenovo IdeaPad' 14 4GB 256GB Core i3 81WA00D8AR",
      precio: "$129.999",
    },
    {
      id: 4,
      linkImg: "https://images.fravega.com/f300/a7a64fe0c101384de5abfe6143bc1eb0.jpg.webp",
      nombre: "Celular",
      descrip: "Celular Samsung Galaxy S20 FE 5G 128GB Azul",
      precio: "$129.999",
    },
    {
      id: 5,
      linkImg: "https://images.fravega.com/f300/560713a6415e62862d5fb8b51db32490.jpg.webp",
      nombre: "TV",
      descrip: "'Smart TV 55' QLED 4K Samsung QN55Q65BAGCF",
      precio: "$159.999",
    },
    {
      id: 6,
      linkImg: "https://images.fravega.com/f300/2cca0c581600f32e27c94ad996696693.jpg.webp",
      nombre: "Notebook",
      descrip: "'Lenovo Notebook Lenovo IdeaPad' 14 4GB 256GB Core i3 81WA00D8AR",
      precio: "$129.999",
    },
    {
      id: 7,
      linkImg: "https://images.fravega.com/f300/a7a64fe0c101384de5abfe6143bc1eb0.jpg.webp",
      nombre: "Celular",
      descrip: "Celular Samsung Galaxy S20 FE 5G 128GB Azul",
      precio: "$129.999",
    },
    {
      id: 8,
      linkImg: "https://images.fravega.com/f300/560713a6415e62862d5fb8b51db32490.jpg.webp",
      nombre: "TV",
      descrip: "'Smart TV 55' QLED 4K Samsung QN55Q65BAGCF",
      precio: "$159.999",
    },
    {
      id: 9,
      linkImg: "https://images.fravega.com/f300/2cca0c581600f32e27c94ad996696693.jpg.webp",
      nombre: "Notebook",
      descrip: "'Lenovo Notebook Lenovo IdeaPad' 14 4GB 256GB Core i3 81WA00D8AR",
      precio: "$129.999",
    },
    {
      id: 10,
      linkImg: "https://images.fravega.com/f300/a7a64fe0c101384de5abfe6143bc1eb0.jpg.webp",
      nombre: "Celular",
      descrip: "Celular Samsung Galaxy S20 FE 5G 128GB Azul",
      precio: "$129.999",
    },
    {
      id: 11,
      linkImg: "https://images.fravega.com/f300/560713a6415e62862d5fb8b51db32490.jpg.webp",
      nombre: "TV",
      descrip: "'Smart TV 55' QLED 4K Samsung QN55Q65BAGCF",
      precio: "$159.999",
    }
  ];
  const [categoria, setCategoria] = useState(productos);
  const value = [categoria, setCategoria];
  function cCategoria(i) {
    setCategoria(productos.filter((producto) => {
      return (producto.nombre === i)
    }))
  }
  return (
    <div className="App">
      <header>
        <button onClick={() => { cCategoria("Notebook") }}>Notebooks</button><button onClick={() => { cCategoria("Celular") }}>Celulares</button><button onClick={() => { cCategoria("TV") }}>Televisores</button>
      </header>
      <main>


        {categoria.map((prod) => {
          return (
            <Card producto={prod} key={prod.id} />
          )
        })}
      </main>

    </div>
  );
}

export default App;
