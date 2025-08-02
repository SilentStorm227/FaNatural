import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import NavBar from "./components/header/NavBar";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Store from "./components/pages/Store";
import Appointment from "./components/pages/Appointment";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Braids from "./components/pages/Braids";
import Wigcare from "./components/pages/Wigcare";
import Treatment from "./components/pages/Treatment";
import Products from "./components/pages/Products";
import Conditioner from "./components/pages/Conditioner";

function App(){
    return(
        <div>
            <Router>

            <NavBar />
            <Routes>
                 <Route path="/" element={<Home />} /> 
                 <Route path="/about" element={<About />} /> 
                 <Route path="/services" element={<Services />} /> 
                <Route path="/store" element={<Store />} />
                <Route path="/appointments" element={<Appointment />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/services/braids" element={<Braids />} />
                <Route path="/services/wigcare" element={<Wigcare />} />
                <Route path="/services/Scalp-and-hair-treatment" element={<Treatment />} />
                <Route path="/services/products" element={<Products />} />
                <Route path="/Leave-in-conditioner" element={<Conditioner />} />
            </Routes>

            </Router>
        </div>
    )
}

export default App;