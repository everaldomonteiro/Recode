import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Promocoes from "./views/Promocoes";
import Destinos from "./views/Destinos";
import Contato from "./views/Contato";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Clientes from "./views/clientes";
import ClientesCreate from "./views/clientes/Create";
import Viagens from "./views/viagens";
import ViagensCreate from "./views/viagens/Create";
import Passagens from "./views/passagens";
import PassagensCreate from "./views/passagens/Create";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Promocoes" element={<Promocoes/>} />
        <Route path="/Destinos" element={<Destinos/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/Clientes" element={<Clientes/>} />
        <Route path="/Clientes-Create" element={<ClientesCreate/>} />
        <Route path="/Clientes-Update/:id" element={<ClientesCreate />} />
        <Route path="/Viagens" element={<Viagens/>} />
        <Route path="/Viagens-Create" element={<ViagensCreate/>} />
        <Route path="/Viagens-Update/:id" element={<ViagensCreate />} />
        <Route path="/Passagens" element={<Passagens/>} />
        <Route path="/Passagens-Create" element={<PassagensCreate/>} />
        <Route path="/Passagens-Update/:id" element={<PassagensCreate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;