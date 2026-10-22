import React from 'react';

function Tabla_de_Citas({ citas }) {
    return (
        <div className="tabla-container" style={{ width: '70%', marginTop: '2rem', margin: '0 auto', border: '1px solid #e2e8f0', borderRadius: '12px', backgroundColor: '#ffffff', boxShadow: '0 4px 14px rgba(15, 23, 42, 0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#334155', textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '14px 16px', backgroundColor: '#f1f5f9', color: '#1e293b', fontSize: '0.9rem', fontWeight: 600 }}>Asunto</th>
                        <th style={{ padding: '14px 16px', backgroundColor: '#f1f5f9', color: '#1e293b', fontSize: '0.9rem', fontWeight: 600 }}>Descripción</th>
                        
                        <th style={{ padding: '14px 16px', backgroundColor: '#f1f5f9', color: '#1e293b', fontSize: '0.9rem', fontWeight: 600 }}>Fecha y Hora</th> 
                    </tr>
                </thead>
                <tbody>
                    {citas.length === 0 ? (
                        <tr>
                            
                            <td colSpan="3" style={{ textAlign: 'center', padding: '24px 16px', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
                                No hay citas programadas
                            </td>
                        </tr>
                    ) : (
                        citas.map((cita) => (
                            <tr key={cita.id}>
                                <td style={{ padding: '14px 16px', borderTop: '1px solid #e2e8f0' }}>{cita.asunto}</td>
                                <td style={{ padding: '14px 16px', borderTop: '1px solid #e2e8f0' }}>{cita.descripcion}</td>
                                
                                <td style={{ padding: '14px 16px', borderTop: '1px solid #e2e8f0' }}>{cita.fecha}</td> 
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Tabla_de_Citas;
