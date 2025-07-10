import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import NavBar from "./components/header/NavBar";
import Store from "./components/pages/Store";

function App(){
    return(
        <div>
            <Router>

            <NavBar />
            <Routes>
                 <Route path="/" element={<Home />} /> 
                <Route path="/store" element={<Store />} />
            </Routes>

            </Router>
        </div>
    )
}

export default App;