import React, { useState } from "react";

const asuntos = [
  "Reballing",
  "Armado de PC",
  "Asesorias",
  "Diagnosticos",
  "Reparacion de Laptop",
  "Mantenimiento Preventivo",
  "Mantenimiento Correctivo",
  "Instalacion de Software",
  "Instalacion de Hardware",
  "Actualizacion de Software",
  "Actualizacion de Hardware",
  "Configuracion de Red",
  "Configuracion de Dispositivos",
  "Recuperacion de Datos",
  "Formateo de Dispositivos",
];

const estiloFormulario = {
  display: "grid",
  gridTemplateColumns: "1fr",
  justifyItems: "center",
  alignItems: "stretch",
  gap: "14px",
  width: "100%",
  maxWidth: "440px",
  margin: "4rem auto",
  padding: "28px 24px",
  background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  boxShadow: "0 12px 32px rgba(15, 23, 42, 0.1)",
  fontFamily: "Arial, sans-serif",
};

const estiloCampo = {
  width: "100%",
  boxSizing: "border-box",
  padding: "12px 14px",
  border: "1px solid #cbd5e1",
  borderRadius: "10px",
  backgroundColor: "#ffffff",
  color: "#1e293b",
  fontSize: "15px",
  outline: "none",
};

const estiloBoton = {
  width: "100%",
  padding: "13px 16px",
  border: "none",
  borderRadius: "10px",
  background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "700",
  cursor: "pointer",
  marginTop: "8px",
  boxShadow: "0 8px 18px rgba(37, 99, 235, 0.28)",
};

const estiloFilaCampos = {
  display: "flex",
  gap: "12px",
  width: "100%",
  justifyContent: "center",
};

const estiloCampoFila = {
  ...estiloCampo,
  flex: "1",
  minWidth: "0",
};

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
      fecha: fechaFormateada, // 3. Añadimos la fecha formateada al objeto
    };

    if (onAgregarCita) {
      onAgregarCita(nuevaCita);
    }

    setDescripcion("");
    setFechaHora("");
  };

  return (
    <form
      onSubmit={manejarEnvio}
      className="form-group"
      style={estiloFormulario}
    >
      <label
        htmlFor="Asuntos_"
        style={{
          display: "block",
          width: "100%",
          fontWeight: "700",
          color: "#334155",
          textAlign: "left",
        }}
      >
        Asunto
      </label>

      <select
        name="Asuntos"
        id="Asuntos_"
        value={asunto}
        onChange={(e) => setAsunto(e.target.value)}
        style={estiloCampo}
      >
        {asuntos.map((asunto, index) => (
          <option key={index} value={asunto}>
            {asunto}
          </option>
        ))}
      </select>

      <div style={estiloFilaCampos}>
        <input
          type="text"
          placeholder="Descripcion"
          required
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={estiloCampoFila}
        />

        <input
          type="datetime-local"
          required
          value={fechaHora}
          onChange={(e) => setFechaHora(e.target.value)}
          style={estiloCampoFila}
        />
      </div>

      <button type="submit" id="btn_agregar_cita" style={estiloBoton}>
        Programar
      </button>
    </form>
  );
}

export default Formulario_de_Cita;
