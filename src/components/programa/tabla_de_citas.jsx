import React from 'react';

function Tabla_de_Citas({ citas }) {
    return (
        <div className="tabla-container">
            <table border="1" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Asunto</th>
                        <th>Descripción</th>
                        {/* 1. Agregamos el encabezado de la columna */}
                        <th>Fecha y Hora</th> 
                    </tr>
                </thead>
                <tbody>
                    {citas.length === 0 ? (
                        <tr>
                            {/* 2. Cambiamos colSpan a 3 porque ahora hay tres columnas */}
                            <td colSpan="3" style={{ textAlign: 'center', padding: '10px' }}>
                                No hay citas programadas
                            </td>
                        </tr>
                    ) : (
                        citas.map((cita) => (
                            <tr key={cita.id}>
                                <td>{cita.asunto}</td>
                                <td>{cita.descripcion}</td>
                                {/* 3. Mostramos la fecha formateada en la celda */}
                                <td>{cita.fecha}</td> 
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Tabla_de_Citas;
