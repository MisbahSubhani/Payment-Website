import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";

import { SendMoney } from "./pages/sendMoney";
import { Home } from "./pages/Home";
import { Payment} from "./pages/Payment";
import { Land} from "./pages/Land";
import { UpdatePassword } from "./pages/UpdatePassword";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
         
          <Route path="/send" element={<SendMoney/>} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/land" element={<Land />} />
          <Route path="/reset" element={<UpdatePassword />} />
          <Route path="/contact" element={<Contact />} />
        

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App