import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Promocoes from "./views/Promocoes";
import Destinos from "./views/Destinos";
import Contato from "./views/Contato";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Promocoes" element={<Promocoes/>} />
        <Route path="/Destinos" element={<Destinos/>} />
        <Route path="/Contato" element={<Contato/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;