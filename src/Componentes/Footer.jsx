import React from "react";
import "../BotonesDelFooter/BotonesFooter.css";

export const Footer = () => {
  return (
    <footer className="footer-templo text-white py-4 mt-5 border-top border-secondary">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div>
          <h5 className="mb-3 text-warning titulo">
            BARBERÍA <span className="text-secondary"> EL TEMPLO</span>
          </h5>
          <p className="mb-0 text-white small fw-bold texto-plano">
            © {new Date().getFullYear()} Todos los derechos reservados.
            Desarrollado por Luis Alvarez.
          </p>
        </div>

        <div className="social-buttons-container">
          <a
            href="https://www.linkedin.com/in/angel-alvarez-b1405b3a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="uiverse-social-btn linkedin"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/angelalvarezr720-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="uiverse-social-btn github"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href="https://wa.me/584128062859?text=Hola,%20quiero%20consultar%20sobre%20un%20corte%20en%20Barber%C3%ADa%20El%20Templo"
            target="_blank"
            rel="noopener noreferrer"
            className="uiverse-social-btn ws"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
