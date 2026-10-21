import React, { useState } from 'react';
import Formulario_de_Cita from './programa/formulario_de_citas';
import Tabla_de_Citas from './programa/tabla_de_citas';

function Main() {
    // El arreglo global de citas vive aquí en el padre
    const [citas, setCitas] = useState([]);

    // Función para que el formulario le mande la nueva cita al padre
    const agregarNuevaCita = (nuevaCita) => {
        setCitas([...citas, nuevaCita]);
    };

    return (
        <main className="main-content">
            {/* Le pasamos la función al formulario para que nos mande datos */}
            <Formulario_de_Cita onAgregarCita={agregarNuevaCita} />
            
            {/* Le pasamos el arreglo de citas a la tabla para que las pinte */}
            <Tabla_de_Citas citas={citas} />
        </main>
    );
}

export default Main;
