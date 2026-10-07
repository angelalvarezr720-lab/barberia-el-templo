import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const manejarBusqueda = (e) => {
    e.preventDefault()
    if (!busqueda.trim()) return;
    navigate(`/buscar?q=${encodeURIComponent(busqueda)}`);

    setBusqueda("");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fondo-navBar">
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex align-items-center gap-2 logo-templo"
          onClick={() => navigate("/")}
        >
          <span className="texto-marca">
            BARBERÍA <strong className="oro-templo"> EL TEMPLO</strong>
          </span>
        </a>
        <button
          className="btn-hamburguesa navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={(e) => e.currentTarget.blur()}
        >
          <span className="icon">
            <svg viewBox="0 0 175 80" width="30" height="30">
              <rect width="80" height="15" fill="currentColor" rx="10"></rect>
              <rect
                y="30"
                width="80"
                height="15"
                fill="currentColor"
                rx="10"
              ></rect>
              <rect
                y="60"
                width="80"
                height="15"
                fill="currentColor"
                rx="10"
              ></rect>
            </svg>
          </span>
          <span className="text">MENÚ</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row gap-3 gap-lg-4 align-items-stretch align-items-lg-center my-3 my-lg-0">
            <li className="nav-item w-100 w-lg-auto">
              <button
                className="btnNavegation w-100 w-lg-auto"
                onClick={() => navigate("/")}
              >
                Principal
              </button>
            </li>

            <li className="nav-item w-100 w-lg-auto">
              <button
                className="btnNavegation w-100 w-lg-auto"
                onClick={() => navigate("/servicios")}
              >
                Servicios
              </button>
            </li>
          </ul>

          <form
            className="d-flex form"
            role="search"
            onSubmit={manejarBusqueda}
          >
            <input
              className="form-control me-2 input"
              type="text"
              placeholder="¿Que corte buscas?"
              aria-label="Search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button className="btn">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
};
