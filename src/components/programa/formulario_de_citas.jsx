import React, { useState } from 'react';

const asuntos = ["Reballing", "Armado de PC", "Asesorias", "Diagnosticos"];

function Formulario_de_Cita({ onAgregarCita }) {
    const [asunto, setAsunto] = useState(asuntos[0]);
    const [descripcion, setDescripcion] = useState('');
    
    const [fechaHora, setFechaHora] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();

     
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
