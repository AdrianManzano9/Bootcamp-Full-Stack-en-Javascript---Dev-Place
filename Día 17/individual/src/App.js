
import { Nav } from './Components/Nav';
import { Products } from './Components/Products';
import { Carousel } from './Components/Carousel';
import { Card } from './Components/Card';
import { Form } from './Components/Form';
import { Footer } from './Components/Footer';
import { FreQuestions } from './Components/FreQuestions';
import { Cart } from './Components/Cart';
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import AppContext from './contexts/AppContext';
import { FormProd } from './Components/FromProd';
import { Bars } from 'react-loader-spinner';

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [shopping, setShopping] = useState();
  const [count, setCount] = useState(0);
  const [productos, setProds] = useState([]);
  const [categories, setCategories] = useState([]);

  const mostrarDatos = async () => {
    await fetch('http://127.0.0.1:5050/product', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json()).then(e => {

      setProds(e.data);
    })
    await fetch('http://127.0.0.1:5050/category', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json()).then(e => {
      setCategories(e.data);
    })

  }
  useEffect(() => {
    mostrarDatos()
  }, [])
  while (productos.length === 0) {
    return (
      <div id='Loader'>
        <Bars
          height="20vw"
          width="20vw"
          color="#001970"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    )
  } 


  return (
    <div className="App">
      <AppContext.Provider value={{ category, setCategory, search, setSearch, shopping, setShopping, count, setCount, productos, categories, mostrarDatos }}>
        <header>

          <Nav />
          <Products />
        </header>
        <main>

          <Routes>
            <Route path='/' element={<Carousel />} />
            <Route path='/Products' element={<Card />} />
            <Route path='/FreQuestions' element={<FreQuestions />} />
            <Route path='/Form/*' element={<Form />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Admin' element={<FormProd />} />
          </Routes>


          <Footer />
        </main>
      </AppContext.Provider>
    </div>
  );
}


export default App;
