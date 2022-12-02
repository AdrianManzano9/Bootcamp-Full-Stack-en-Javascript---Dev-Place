import React, { useState } from 'react'
import Button from './Button'
import Footer from './Footer'
import Nav from './Nav'
import Padre from './Titulo'
import Producto1 from './productos/Producto1'
import Producto2 from './productos/Producto2'
import Producto3 from './productos/Producto3'

export const AppContext = React.createContext();


function App() {
    var [type, setType] = useState("nada");
    console.log(type);
    function typeSet(tipo){
      setType(tipo);
      console.log(type);
    }

  return (
    

  <>
    <AppContext.Provider value={[[type, setType],typeSet]}>
      <Nav />
    </AppContext.Provider>

    <Padre></Padre>
    <Producto1 />
    <Producto2 />
    <Producto3></Producto3>
    <Button />
    <Footer />
  </>
  )
}

export default App

// const value = useContext(miContexto); //acepta un objeto de contexto (valor devuelto de React.context)

// //Devuelve el valor del contexto actual

// //El valor actual del contexto es el "value" del <Mycontext.Provide>

// //Argumento enviado a useContext: useContext(miContexto)

// //Creacion de temas claro y oscuro
// const themes = {
//   light: {
//     foreground: "#000",
//     background: "#eee",
//   },
//   dark: {
//     foreground: "#fff",
//     background: "#222",
//   },
// };

// //Creamos el hook, y le damos un contexto inicial que es el light
// const ThemeContext = React.createContext(themes.light);

// function App() {
//   return (
//     <ThemeContext.Provider value={themes.dark}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   return (
//     <button style={{ background: theme.background, color: theme.foreground }}>
//       Mi estilo depende de mi contexto...
//     </button>
//   );
// }