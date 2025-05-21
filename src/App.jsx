import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./components/header/NavBar";

function App(){
    return(
        <div>
            <Router>

            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            </Router>
        </div>
    )
}

export default App;