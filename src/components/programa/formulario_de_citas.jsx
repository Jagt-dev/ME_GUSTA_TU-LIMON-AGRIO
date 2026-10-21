import React, { useState } from 'react';

const asuntos = ["Reballing", "Armado de PC", "Asesorias", "Diagnosticos"];

function Formulario_de_Cita({ onAgregarCita }) {
    const [asunto, setAsunto] = useState(asuntos[0]);
    const [descripcion, setDescripcion] = useState('');
    // 1. Creamos el estado para la fecha y hora
    const [fechaHora, setFechaHora] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();

        // 2. Reemplazamos la 'T' del input por un espacio y agregamos ':00' para los segundos
        // Ejemplo de entrada: "2026-10-21T17:30" -> Resultado: "2026-10-21 17:30:00"
        const fechaFormateada = fechaHora.replace('T', ' ') + ':00';

        const nuevaCita = {
            id: Date.now(),
            asunto: asunto,
            descripcion: descripcion,
            fecha: fechaFormateada // 3. Añadimos la fecha formateada al objeto
        };

        if (onAgregarCita) {
            onAgregarCita(nuevaCita);
        }

        // 4. Limpiamos los campos
        setDescripcion('');
        setFechaHora('');
    };

    return (
        <form onSubmit={manejarEnvio} className="form-group">
            <label htmlFor="Asuntos_">Asunto</label>
            <select 
                name="Asuntos" 
                id="Asuntos_"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
            >  
                {asuntos.map((asunto, index) => (
                    <option key={index} value={asunto}>
                        {asunto}
                    </option>
                ))}
            </select>

            <input 
                type="text" 
                placeholder="Descripcion" 
                required
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />

            {/* para fecha y hora */}
            <input 
                type="datetime-local" 
                required
                value={fechaHora}
                onChange={(e) => setFechaHora(e.target.value)}
            />

            <button type="submit" id='btn_agregar_cita'>
                Programar
            </button>
        </form>
    );
}

export default Formulario_de_Cita;
