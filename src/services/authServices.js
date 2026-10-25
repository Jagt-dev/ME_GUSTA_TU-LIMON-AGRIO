const usuarios = [
    {
        id: 1,
        nombre: "Jesse Gaitán",
        correo: "jesse@citasti.com",
        clave: "temporal"
    },

    {
        id: 2,
        nombre: "Julio Martínez",
        correo: "julio@citasti.com",
        clave: "temporal"
    },

    {
        id: 3,
        nombre: "Damaso Duarte",
        correo: "damaso@citasti.com",
        clave: "temporal"
    }
]


export function iniciarSesion(correo, clave) {
    const usuario = usuarios.find(
        (usuario) => 
            usuario.correo === correo.trim().toLowerCase() && 
            usuario.clave === clave

    );

    if (!usuario) {
        return null;
    }

    return {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo
    };

}