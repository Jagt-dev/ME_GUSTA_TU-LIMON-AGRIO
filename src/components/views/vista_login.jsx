import { useState } from "react";
import { iniciarSesion } from "../../services/authServices";
 

function Login({ onAcceder }) {
  const [correo, setCorreo] = useState("");//useState devuelve [valor, funcion].
  const [clave, setClave] = useState("");
  const [mostrarClave, setMostrarClave] = useState(false);
  const [error, setError] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    setError("");

    const usuario = iniciarSesion(correo, clave);

    if (!usuario) {
      setError("Correo o clave incorrectos");
      return;
    }

    onAcceder(usuario);
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-header">
          <div className="login-icon">TI</div>

          <h1>Citas TI para TI</h1>
          <p></p>
        </div>

        <form className="login-form" onSubmit={manejarEnvio}>
          <div className="login-field">
            <label htmlFor="correo">Correo</label>

            <input
              id="correo"
              type="email"
              placeholder="Ingresa tu correo"
              autoComplete="username"
              value={correo}
              //
              onChange={(e) => {
                setCorreo(e.target.value);
                setError("");
              }}
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="clave">Clave</label>

            <div className="login-password">
              <input
                id="clave"
                type={mostrarClave ? "text" : "password"}
                placeholder="Ingresa tu clave"
                autoComplete="current-password"
                value={clave}
                onChange={(e) => {
                  setClave(e.target.value);
                  setError("");
                }}
                required
              />

              <button
                type="button"
                className="login-toggle"
                onClick={() => setMostrarClave(!mostrarClave)}
              >
                {mostrarClave ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>

          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}

          <button
          type= "submit"
          className="login-submit"
          >
            Iniciar sesión
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
