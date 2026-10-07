import React from "react";
import { useNavigate } from "react-router-dom";
import { cortesData } from "../DatosDeCortes/DataCortes";

const Servicios = () => {
  const navegation = useNavigate();

  const infoAgendadoDesdeElHome = (corte) => {
    console.log("click");
    navegation("/Reservar", { state: { servicioSeleccionado: corte } });
  };

  return (
    <div>
      <div className="container-fluid px-1 pt-3">
        <div className="text-center mb-5">
          <h2 className="Titulo text-uppercase fw-bold display-6 text-secondary">
            Todos <span className="text-white">Nuestros</span><span style={{ color: "#d4af37" }}> Servicios</span>
          </h2>
          <h5
            className="mt-4 fw-bold text-white"
            style={{
              fontFamily: "sans-serif",
              textShadow: "8px 3px 4px #d4af37a4",
            }}
          >
            Conoce el estilo y la precisión de nuestro trabajo
          </h5>
        </div>
      </div>

      <div className="row g-4">
        {cortesData.map((cortes) => (
          <div key={cortes.id} className="col-12 col-md-4">
            <div className="card text-white shadow-lg bg-dark h-100">
              <div className="card-contenido w-100">
                <div
                  style={{ height: "250px", overflow: "hidden" }}
                  className="w-100"
                >
                  <img
                    src={cortes.imagen}
                    className="w-100 h-100"
                    alt={cortes.titulo}
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Texto de la tarjeta */}
                <div className="p-3 text-center">
                  <h5
                    className="text-uppercase fw-bold mb-2"
                    style={{
                      color: "#d4af37",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {cortes.titulo}
                  </h5>
                  <p className="text-secondary small mb-0 mt-4 fw-bold">
                    {cortes.descripcion}
                  </p>
                </div>
                <div className="p-3 pt-0 text-center">
                  <button
                    onClick={() => infoAgendadoDesdeElHome(cortes)}
                    className="Ver-Cortes-Del-Home text-uppercase mt-3 "
                  >
                    <span>Mirar este servicio</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
