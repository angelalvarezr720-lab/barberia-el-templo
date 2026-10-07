import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { barberos } from "../DatosDeCortes/BarberosDisponibles";

export const Reservar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const numeroDeLaBarberia = "584128062859";
  const [mostrarExito, setMostrarExito] = useState(false);

  const servicio = location.state?.servicioSeleccionado || {
    titulo: "Corte General / Asesoría",
    precio: "15",
  };

  const [datosCliente, setDatosCliente] = useState({
    nombre: "",
    telefono: "",
    barbero: "Cualquiera barbero disponible",
    fecha: "",
    hora: "",
  });

  const handleChange = (e) => {
    setDatosCliente({
      ...datosCliente,
      [e.target.name]: e.target.value,
    });
  };

  const manejadorDeEnvio = (e) => {
    e.preventDefault();
    setMostrarExito(true);
  };

  const botonEnviarAlWs = () => {
    const mensajeWhatsApp = `*BARBERÍA EL TEMPLO - NUEVA RESERVA* 💈
          ----------------------------------
          👤 *Cliente:* ${datosCliente.nombre}
          📞 *Teléfono:* ${datosCliente.telefono}
          ✂️ *Servicio:* ${servicio.titulo}
          💵 *Precio:* $${servicio.precio}
          💈 *Barbero:* ${datosCliente.barbero}
          📅 *Fecha:* ${datosCliente.fecha}
          ⏰ *Hora:* ${datosCliente.hora}`;

    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    const urlWhatsApp = `https://wa.me/${numeroDeLaBarberia}?text=${mensajeCodificado}`;

    window.open(urlWhatsApp, "_blank");
  };

  return (
    <div className="div-principal">
      <div className="resumen-card">
        <div className="resumen-header">
          <span>SERVICIO SELECCIONADO</span>
          <button onClick={() => navigate("/")} className="btn-cambiar">
            Cambiar
          </button>
        </div>

        <h2 className="titulo-servicio">{servicio.titulo}</h2>
        <p className="precio-servicio">
          Precio: <span className="precio-monto">${servicio.precio}</span>
        </p>
      </div>

      {/* FORMULARIO */}
      <div className="form-card">
        <h3 className="titulo-form">DATOS PARA LA CITA</h3>

        <form onSubmit={manejadorDeEnvio}>
          <div>
            <label className="label-custom">Nombre y Apellido</label>
            <input
              type="text"
              name="nombre"
              value={datosCliente.nombre}
              onChange={handleChange}
              placeholder="Ej. Luis Alvarez"
              className="input-custom"
              required
            />
          </div>

          <div>
            <label className="label-custom">
              Teléfono (WhatsApp o llamada)
            </label>
            <input
              type="tel"
              name="telefono"
              value={datosCliente.telefono}
              onChange={handleChange}
              placeholder="Ej. 04121234567"
              className="input-custom"
              required
            />
          </div>

          <div>
            <label className="label-custom">Barbero</label>
            <select
              name="barbero"
              value={datosCliente.barbero}
              onChange={handleChange}
              className="input-custom"
              required
            >
              <option value="Cualquier barbero">Cualquier barbero</option>
              {Array.isArray(barberos) &&
                barberos.map((item) => (
                  <option key={item.id} value={item.titulo || item.nombre}>
                    {item.titulo || item.nombre}
                  </option>
                ))}
            </select>
          </div>

          <div className="fecha-hora-group">
            <div className="fecha-hora-item">
              <label className="label-custom">Fecha</label>
              <input
                type="date"
                name="fecha"
                value={datosCliente.fecha}
                onChange={handleChange}
                className="input-custom"
                required
              />
            </div>
            <div className="fecha-hora-item">
              <label className="label-custom">Hora</label>
              <input
                type="time"
                name="hora"
                value={datosCliente.hora}
                onChange={handleChange}
                className="input-custom"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-confirmar">
            Confirmar Reserva
          </button>
        </form>
        {mostrarExito && (
          <div className="modal-overlay">
            <div className="modern-success-message">
              <button
                className="close-btn"
                onClick={() => setMostrarExito(false)}
              >
                ×
              </button>

              <div className="icon-wrapper">
                <svg
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="success-icon"
                >
                  <path d="M9 12l2 2 4-4"></path>
                  <circle r="10" cy="12" cx="12"></circle>
                </svg>
              </div>

              <div className="text-wrapper">
                <div className="title">¡Reserva Confirmada!</div>
                <div className="message">
                  Te esperamos, {datosCliente.nombre}. Quedaste agendado para el{" "}
                  {datosCliente.fecha} con {datosCliente.barbero}.
                </div>
              </div>

              <button className="btn-enviarNota" onClick={botonEnviarAlWs}>
                Enviar Cita por WhatsApp 📲
              </button>

              <button
                className="btn-entendido"
                onClick={() => setMostrarExito(false)}
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
