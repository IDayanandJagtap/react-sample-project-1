import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Components/Home.jsx"
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Components/Contact.jsx"

import './styles/Header.css'
import './styles/Home.css'
import './styles/Footer.css'
import './styles/Contact.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
