import { v4 as uuidv4 } from 'uuid';
const listaUsuarios = [];

export function agregarUsuario(nombre, apellido, correo, password, fecha, sexo, telefono) {
  var usuario = {
    id: uuidv4(),
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    password: password,
    fecha: fecha,
    sexo: sexo,
    telefono: telefono,
  };
  listaUsuarios.push(usuario);
}

export function buscarUsuario(correo, password) {
  for (let index = 0; index < listaUsuarios.length; index++) {
    const user = listaUsuarios[index];
    if (user.correo === correo && user.password === password) {
      return true;
    }
  }
  return false;
}

export const eliminarUsuario = (id) => {
  listaUsuarios = listaUsuarios.filter((usuario) => usuario.id !== id);
  return "Usuario Eliminado";
};

export const actualizarUsuario = (id, nombre, apellido, correo, fecha) => {
  const usuario = listaUsuarios.find((u) => u.id === id);
  if (usuario) {
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.correo = correo;
    usuario.fecha = fecha;
  }
};

export default listaUsuarios;
