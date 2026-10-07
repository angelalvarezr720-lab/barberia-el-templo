import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { cortesData } from "../DatosDeCortes/DataCortes";

export const BusquedaDeCortes = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()
  const terminoBusqueda = searchParams.get("q") || "";

  const resultados = cortesData.filter((corte) => {
    const titulo = corte.titulo || corte.nombre || "";
    return titulo.toLowerCase().includes(terminoBusqueda.toLowerCase());
  });

  const infoAgendadoDesdeElHome = (corte) => {
    navigate("/reservar", { state: { servicio: corte } });
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 
          className="Titulo text-uppercase fw-bold display-5 text-secondary"
        >
          Resultados de <span style={{ color: "#d4af37" }}>Búsqueda</span>
        </h1>
        
        {terminoBusqueda && (
          <p className="text-secondary fs-5 mt-2">
            Estado del servicio: <strong className="text-white">"{terminoBusqueda}"</strong>
          </p>
        )}

        <div 
          className="mx-auto mt-3" 
          style={{ 
            width: "80px", 
            height: "3px", 
            backgroundColor: "#d4af37", 
            borderRadius: "2px" 
          }}
        />
      </div>

      {resultados.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-secondary fs-5">
            No encontramos cortes o servicios que coincidan con tu búsqueda.
          </p>
          <button
            onClick={() => navigate("/servicios")}
            className="btn btn-outline-warning mt-3 text-uppercase px-4 py-2"
            style={{ color: "#d4af37", borderColor: "#d4af37" }}
          >
            Ver todos los servicios
          </button>
        </div>
      ) : (
        <div className="row g-4 justify-content-center">
          {resultados.map((cortes) => (
            <div key={cortes.id} className="col-12 col-md-6 col-lg-4">
              <div className="card text-white shadow-lg bg-dark h-100">
                <div className="card-contenido w-100 d-flex flex-column h-100">
                  <div
                    style={{ height: "250px", overflow: "hidden" }}
                    className="w-100 position-relative"
                  >
                    <img
                      src={cortes.imagen}
                      className="w-100 h-100"
                      alt={cortes.titulo}
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Texto de la tarjeta */}
                  <div className="p-4 text-center flex-grow-1 d-flex flex-column justify-content-between">
                    <div>
                      <h5
                        className="text-uppercase fw-bold mb-2"
                        style={{
                          color: "#d4af37",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        {cortes.titulo}
                      </h5>
                      <p className="text-secondary small mb-0 mt-3 fw-normal">
                        {cortes.descripcion}
                      </p>
                    </div>

                    <div className="pt-3">
                      <button
                        onClick={() => infoAgendadoDesdeElHome(cortes)}
                        className="Ver-Cortes-Del-Home text-uppercase mt-3 w-100"
                      >
                        <span>Mirar este servicio</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
