import React from 'react';

function Tabla_de_Citas({ citas }) {
    return (
        <div className="tabla-container" style={{ width: '70%', marginTop: '2rem', margin: '0 auto', border: '1px solid #ffffff', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#ffffff', boxShadow: '0 4px 14px rgba(15, 23, 42, 0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, color: '#334155', textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '14px 16px', backgroundColor: '#0d1521', color: '#95a9ca', fontSize: '0.9rem', fontWeight: 600, borderTopLeftRadius: '14px', overflow: 'hidden' }}>Asunto</th>
                        <th style={{ padding: '14px 16px', backgroundColor: '#0d1521', color: '#95a9ca', fontSize: '0.9rem', fontWeight: 600 }}>Descripción</th>
                        <th style={{ padding: '14px 16px', backgroundColor: '#0d1521', color: '#95a9ca', fontSize: '0.9rem', fontWeight: 600, borderTopRightRadius: '14px', overflow: 'hidden' }}>Fecha y Hora</th> 
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
                                <td style={{ padding: '14px 16px', borderTop: '1px solid #e2e8f0', backgroundColor: '#ecf4fe', color: '#0d1521' }}>{cita.asunto}</td>
                                <td style={{ padding: '14px 16px', borderTop: '1px solid #e2e8f0', backgroundColor: '#ecf4fe', color: '#0d1521' }}>{cita.descripcion}</td>
                                
                                <td style={{ padding: '14px 16px', borderTop: '1px solid #e2e8f0', backgroundColor: '#ecf4fe', color: '#0d1521' }}>{cita.fecha}</td> 
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Tabla_de_Citas;
