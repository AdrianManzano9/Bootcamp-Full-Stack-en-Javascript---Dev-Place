import React, { useContext } from "react";
import { AppContext } from "./App";


function Nav() {
  var value = useContext(AppContext);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{value.type}</a>
       
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
          
        </div>
      </div>
    </nav>
  )
}
export default Nav;
