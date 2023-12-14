import listaUsuarios from "./Usuarios";

 var Clientes = listaUsuarios.filter(vendedor => vendedor.role==="cliente");


export function buscarCliente(id){
    return Clientes.filter(Usuario => Usuario.id ===id);

}

export function eliminarCliente(id){
    Clientes =   Clientes.filter(Usuario => Usuario.id !==id);
    return "Usuario Eliminado";
}

export function actualizarCliente(id,nombre,apellido,correo,fecha){
    var cliente =  Clientes.filter(cliente => cliente.id ===id);
     cliente={
        nombre:nombre,
        apellido:apellido,
        correo:correo,
        fecha:fecha
    };
    Clientes.push(cliente);
}

export default Clientes;