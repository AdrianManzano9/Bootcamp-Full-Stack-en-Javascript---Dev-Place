import { Form } from './components/Form';
import React from 'react';
import './App.css';
import { useState } from 'react';
export const AppContext = React.createContext();
 function App() {
  

  var date = new Date();
  var productos=["Pc","Celular","Tablet","Cafetera"]
  var cont="0";
  return (
    
    <div className="App">
      <AppContext.Provider value={cont}>
      <Form productos/>
      </AppContext.Provider>
    </div>
   
  );

}

export default App;
