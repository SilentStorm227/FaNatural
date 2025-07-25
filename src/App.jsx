import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import NavBar from "./components/header/NavBar";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Store from "./components/pages/Store";
import Appointment from "./components/pages/Appointment";
import Signup from "./components/pages/Signup";

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
            </Routes>

            </Router>
        </div>
    )
}

export default App;