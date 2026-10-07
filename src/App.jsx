import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Servicios from "./Routes/Servicios";
import { Reservar } from './Routes/Reservar';
import { NavBar } from "./Componentes/NavBar";
import { BusquedaDeCortes } from "./Routes/BusquedaDeCortes";
import { Footer } from "./Componentes/Footer";


import "./EstiloNavBar/BotonBuscarNav.css";
import "./EstiloNavBar/InputsDeTexto.css";
import "./EstiloNavBar/FondoNav.css";
import "./EstiloNavBar/BtnNavegation.css";
import "./EstiloNavBar/BotonHamburguesa.css";
import "./EstiloNavBar/TituloNavbar.css";
import "./EstilosSoloCssHome/home.css";
import "./GaleriaDeCortesCss/GaleriaDeCortes.css";
import "./GaleriaDeNuestraBaberiaCSS/GaleriaDeNuestroTemplo.css";
import "./BannerParaOfrecerCss/BannerParaOfrecer.css";
import "./ReservarCss/Reservar.css";




export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/buscar" element={<BusquedaDeCortes />} />
      </Routes>
      <Footer/>
    </>
  );
}