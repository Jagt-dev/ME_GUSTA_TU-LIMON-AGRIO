import React, { useState } from 'react';
import Formulario_de_Cita from '../views/vista_formulario';
import Tabla_de_Citas from '../views/vista_tbl_citas';


function Main() {
    
    const [citas, setCitas] = useState([]);

    
    const agregarNuevaCita = (nuevaCita) => {
        setCitas([...citas, nuevaCita]);
    };

    return (
        <main className="main-content">
            <Formulario_de_Cita onAgregarCita={agregarNuevaCita} /> 
            <Tabla_de_Citas citas={citas} />
        </main>
    );
}

export default Main;
