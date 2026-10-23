function Tabla_de_Citas({ citas }) {
    return (
        <div className="tabla-container">
            <table className="tabla-citas">
                <thead>
                    <tr>
                        <th>Asunto</th>
                        <th>Descripción</th>     
                        <th>Fecha y Hora</th> 
                    </tr>
                </thead>
                <tbody>
                    {citas.length === 0 ? (
                        <tr>
                            <td className="td-true" colSpan="3">
                                No hay citas programadas
                            </td>
                        </tr>
                    ) : (
                        citas.map((cita) => (
                            <tr key={cita.id}>
                                <td className="td-false">{cita.asunto}</td>
                                <td className="td-false">{cita.descripcion}</td>
                                <td className="td-false">{cita.fecha}</td> 
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Tabla_de_Citas;
