import { useState } from 'react';
import Header from './components/design/Header';
import Main from './components/design/Main';
import Footer from './components/design/Footer';
import Login from './components/views/vista_login';
import "./styles/styles.css";

const CLAVE_SESION = "usuario_sesion";

function App() {

  const [usuario, setUsuario] = useState(() => {
    try {
      const usuarioGuardado = sessionStorage.getItem(CLAVE_SESION);
      return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
    } catch {
      return null;
    }
  });

   const manejarAcceso = (usuarioValidado) => {
      try{
        sessionStorage.setItem(
          CLAVE_SESION, 
          JSON.stringify(usuarioValidado));
      } catch{

      }

      setUsuario(usuarioValidado);
   };

   const cerrarSesion = () => {
    try{
      sessionStorage.removeItem(CLAVE_SESION);
    } catch{

    }
    setUsuario(null);
   }

   if (!usuario) {
    return <Login onAcceder={manejarAcceso} />;
   }

  return (
    <div className="app-container">
      <div className="sesion">
        <p>Bienvenido, {usuario?.nombre}</p>
        <button onClick={cerrarSesion}>Cerrar Sesión</button>
      </div>

      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
