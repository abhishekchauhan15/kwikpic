import "./App.css";
import Home from "./components/home/Home";
import About from "./components/home/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
