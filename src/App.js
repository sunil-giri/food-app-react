import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
