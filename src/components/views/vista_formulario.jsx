import { useState } from "react";
// Archivo para el formulario.
const asuntos = [
  "Reballing",  "Armado de PC",
  "Asesorias",  "Diagnosticos",
  "Reparacion de Laptop",  "Mantenimiento Preventivo",
  "Mantenimiento Correctivo",  "Instalacion de Software",
  "Instalacion de Hardware",  "Actualizacion de Software",
  "Actualizacion de Hardware",  "Configuracion de Red",
  "Configuracion de Dispositivos",  "Recuperacion de Datos",
  "Formateo de Dispositivos"
];

function Formulario_de_Cita({ onAgregarCita }) {
  const [asunto, setAsunto] = useState(asuntos[0]);
  const [descripcion, setDescripcion] = useState("");
  const [fechaHora, setFechaHora] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    const fechaFormateada = fechaHora.replace("T", " ") + ":00";

    const nuevaCita = {
      id: Date.now(),
      asunto: asunto,
      descripcion: descripcion,
      fecha: fechaFormateada,
    };

    if (onAgregarCita) {
      onAgregarCita(nuevaCita);
    }

    setDescripcion("");
    setFechaHora("");
  };

  return (
    <form onSubmit={manejarEnvio} className="form-group">
      <label htmlFor="Asuntos_" className="form-label">
        Asunto
      </label>

      <select
        name="Asuntos"
        id="Asuntos_"
        value={asunto}
        onChange={(e) => setAsunto(e.target.value)}
        className="form-field form-select"
      >
        {asuntos.map((asunto, index) => (
          <option key={index} value={asunto}>
            {asunto}
          </option>
        ))}
      </select>

      <div className="form-row">
        <input
          type="text"
          placeholder="Descripcion"
          required
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="form-field form-row-field"
        />

        <input
          type="datetime-local"
          required
          value={fechaHora}
          onChange={(e) => setFechaHora(e.target.value)}
          className="form-field form-row-field"
        />
      </div>

      <button type="submit" id="btn_agregar_cita" className="form-button">
        Programar
      </button>
    </form>
  );
}

export default Formulario_de_Cita;