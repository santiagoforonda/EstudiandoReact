import listaUsuarios from "./Usuarios";

var Vendedores = listaUsuarios.filter(vendedor => vendedor.role==="vendedor");

export function buscarUsuario(id){
    return Vendedores.filter(Usuario => Usuario.id ===id);

}

export function eliminarUsuario(id){
    Vendedores =  Vendedores.filter(Usuario => Usuario.id !==id);
    return "Usuario Eliminado";
}

export function actualizarUsuario(id,nombre,apellido,correo,fecha){
    var usuario= Vendedores.filter(Usuario => Usuario.id ===id);
    usuario={
        nombre:nombre,
        apellido:apellido,
        correo:correo,
        fecha:fecha
    };
    Vendedores.push(usuario);
}
export default Vendedores;



