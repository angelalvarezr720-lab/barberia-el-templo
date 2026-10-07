import { useNavigate } from "react-router-dom";

export const BannerParaOfrecer = () => {

    const navegation = useNavigate();

    const manejarClickParaReservas = (e) => {
        e.preventDefault()
        navegation('/servicios')
    };

  return (
    <section className="cta-final-section text-center py-5 position-relative overflow-hidden">
      <div className="cta-overlay"></div>
      <div className="container position-relative z-2 py-4">
        <p className="cta-subtitulo text-uppercase mb-2">
          ¿LISTO PARA RENOVAR TU ESTILO?
        </p>
        <h2 className="cta-titulo mb-3">
          <span className="text-white">RESERVA</span> TU EXPERIENCIA EN <span className="text-white">EL TEMPLO</span>
        </h2>
        <p className="cta-texto mx-auto mt-5 fw-bold">
          Asegura tu lugar con nuestros barberos especialistas y disfruta de un servicio de primera clase.
        </p>
        <a
          href="#reservas"
          onClick={manejarClickParaReservas}
          className="btn btn-cta-dorado text-uppercase fw-bold"
        >
          Agendar Cita Ahora
        </a>
      </div>
    </section>
  );
};