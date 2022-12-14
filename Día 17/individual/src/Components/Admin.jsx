import { Route, Routes } from "react-router-dom"
import { FormProd } from "./FromProd"
import { FormCategories } from "./FormCategories"
import { Orders } from "./Orders"

export function Admin() {

    return (
        <Routes>
            <Route path='/' element={<FormProd />} />
            <Route path='/Categories' element={<FormCategories />} />
            <Route path='/Orders' element={<Orders />} />


        </Routes>

    )

}