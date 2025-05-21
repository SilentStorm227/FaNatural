import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home/Home";

function App(){
    return(
        <div>
            <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            </Router>
        </div>
    )
}

export default App;