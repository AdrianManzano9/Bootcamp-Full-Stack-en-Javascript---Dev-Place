
import { Route, Routes } from "react-router-dom";
import {Subsc} from "./Subsc";
import { Login } from "./Login";

export function Form() {
   
    return (
        <>
            <div id="marca-general">
                <h3>Suscribete para recibir las mejores ofertas y promociones especiales</h3>
                <img alt="" src="https://www.fayerwayer.com/resizer/j-ddZDyqpTn13t5BrLW4YSMi35k=/arc-photo-metroworldnews/arc2-prod/public/37E67NHO3BFOTBGYIG5KBIGPN4.jpg" className="img-fluid" />

            </div>
            <Routes>
                <Route path='/' element={<Subsc />} />
                <Route path='/Login' element={<Login />} />
            </Routes>


        </>
    )
}