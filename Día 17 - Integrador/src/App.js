

import { Nav } from './Components/Nav';
import { Products } from './Components/Products';
import { Carousel } from './Components/Carousel';
import { Card } from './Components/Card';
import { Form } from './Components/Form';
import { Footer } from './Components/Footer';
import { FreQuestions } from './Components/FreQuestions';
import { Cart } from './Components/Cart';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import AppContext from './contexts/AppContext';

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [shopping, setShopping] = useState();
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AppContext.Provider value={{ category, setCategory, search, setSearch,shopping, setShopping, count, setCount }}>
        <header>
          <Nav />
          <Products />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Carousel />} />
            <Route path='/Products' element={<Card />} />
            <Route path='/FreQuestions' element={<FreQuestions />} />
            <Route path='/Form' element={<Form />} />
            <Route path='/Cart' element={<Cart />} />
          </Routes>


          <Footer />
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
