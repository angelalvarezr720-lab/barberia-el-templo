export const GaleriaDeNuestroTemplo = () => {
  return (
    <div className="container mt-4 ">
      <div className="text-center p-5">
        <h2 className="display-5 fw-bold text-secondary titulo-nuestro-templo">
          NUESTRO <span className="text-warning">TEMPLO</span>
        </h2>
        <h5
          className="mt-4 fw-bold text-white"
          style={{
            fontFamily: "sans-serif",
            textShadow: "8px 3px 4px #d4af37a4",
          }}
        >
          Echa un vistazo a nuestras instalaciones y ambiente
        </h5>
      </div>

      <div className="row justify-content-center ">
        <div className="col-12 col-xl-11">
          <div
            id="barberiaCarousel"
            className="carousel slide shadow-lg rounded-3 overflow-hidden border border-secondary"
          >
            {/* Indicadores*/}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#barberiaCarousel"
                data-bs-slide-to="0"
                className="active btn btn-warning"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-target="#barberiaCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-target="#barberiaCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                className="btn btn-warning"
                data-bs-target="#barberiaCarousel"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>

            {/* Lista de Imágenes */}

            <div className="carousel-inner">
              {/* Imagen:1 */}
              <div className="carousel-item active" data-bs-interval="4000">
                <div className="w-100" style={{ height: "520px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1678356164573-9a534fe43958?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="d-block w-100 h-100 object-fit-cover"
                    alt="Sillas de Barbería"
                  />
                </div>
                <div className="carousel-caption d-md-block bg-dark bg-opacity-75 rounded-3 p-2 mb-3">
                  <h5 className="text-warning mini-titulo">NUESTRO <span className="text-white"> ESPACIO</span></h5>
                  <p className="fw-bold">Comodidad y tranquilidad para tu sesión de corte.</p>
                </div>
              </div>

              {/* Imagen:2 */}
              <div className="carousel-item" data-bs-interval="4000">
                <div className="w-100" style={{ height: "520px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80"
                    className="d-block w-100 h-100 object-fit-cover"
                    alt="Herramientas de corte"
                  />
                </div>
                <div className="carousel-caption d-md-block bg-dark bg-opacity-75 rounded-3 p-2 mb-3">
                  <h5 className="mini-titulo">HERAMIENTAS  <span className="text-warning"> PROFESIONALES</span></h5>
                  <p className="fw-bold">Máquinas, navajas de alta precisión y las sillas mas comodas</p>
                </div>
              </div>

              {/* Imagen:3 */}
              <div className="carousel-item" data-bs-interval="4000">
                <div className="w-100" style={{ height: "520px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1759134198561-e2041049419c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="d-block w-100 h-100 object-fit-cover"
                    alt="Ambiente de la barbería"
                  />
                </div>
                <div className="carousel-caption d-md-block bg-dark bg-opacity-75 rounded-3 p-2 mb-3">
                  <h5 className="mini-titulo">AMBIENTE <span className="text-warning">EXCLUSIVO</span></h5>
                  <p>Un espacio diseñado para relajarte.</p>
                </div>
              </div>

              {/*Imagen:4*/}
              <div className="carousel-item" data-bs-interval="4000">
                <div className="w-100" style={{ height: "520px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1640301133857-c4bc5789c1bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="d-block w-100 h-100 object-fit-cover"
                    alt="Ambiente de la barbería"
                  />
                </div>
                <div className="carousel-caption d-md-block bg-dark bg-opacity-75 rounded-3 p-2 mb-3">
                  <h5 className="mini-titulo">TU MEJOR <span className="text-warning">VERSIÓN</span></h5>
                  <p>Sal de aquí listo para destacar en cualquier ocasión.</p>
                </div>
              </div>
            </div>

            {/*Flechas de Navegación */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#barberiaCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#barberiaCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
