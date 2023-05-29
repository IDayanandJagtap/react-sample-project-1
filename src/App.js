import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Components/Home.jsx"
import Header from "./Components/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
