import React from "react";
import { useNavigate } from "react-router-dom";

export const BannerBienvenida = () => {
  const navigate = useNavigate();

  const navegarPorReservas = () => {
    navigate("/agendar");
  };

  return (
    <>
      <section className="hero-section text-center d-flex align-items-center justify-content-center">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1">
          <p className="subtitulo-dorado text-uppercase">
            Experiencia & Tradición
          </p>
          <h1 className="titulo-hero mb-3">
            BARBERÍA <span className="oro-templo text-warning">EL TEMPLO</span>
          </h1>
          <p className="texto-hero mx-auto mb-4">
            El espacio donde el estilo clásico y la precisión moderna se
            encuentran. Eleva tu imagen con nosotros.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="row g-4 my-5 text-center px-3">
          <div className="col-md-4">
            <div className="p-4 card-spotlight h-100">
              <h3 className="h4 text-warning mb-3">Técnica & Precisión</h3>
              <p className="text-secondary mb-0 fw-bold">
                Especialistas en degradados perfectos, perfilados a navaja y
                acabados limpios adaptados a cada tipo de rostro 💈.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 card-spotlight h-100">
              <h3 className="h4 text-warning mb-3">Estilo Propio</h3>
              <p className="text-secondary mb-0 fw-bold">
                Desde cortes tradicionales hasta las últimas tendencias urbanas.
                Asesoría de imagen en cada sesión 🔥.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 card-spotlight h-100">
              <h3 className="h4 text-warning mb-3">Experiencia Única</h3>
              <p className="text-secondary mb-0 fw-bold">
                Un espacio diseñado para conectar, relajarse y disfrutar de un
                trato exclusivo con los mejores productos ⏳.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};