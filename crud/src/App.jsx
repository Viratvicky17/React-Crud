import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homecurd from "./Components/Homecurd"
import CreateUser from "./Components/CreateUser"
import User from "./Components/User"
import EditUser from "./Components/EditUser"

const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Homecurd/>
             <Routes>
                <Route element={<CreateUser/>} path="/"/>
                <Route element={<User/>} path="/user" />
                 <Route element={<EditUser/>} path='/edit/:index' />
                
             </Routes>

            </BrowserRouter>
        </div>
    )
}
export default App