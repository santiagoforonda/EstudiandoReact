import {v4 as uuidv4} from 'uuid';

var Productos = [];

export function agregar (nombre,cantidad,precio,id_detalles, id_tienda){
    var producto = {
        id:uuidv4(),
        nombre:nombre,
        cantidadStock:cantidad,
        precio:precio,
        id_tienda:id_tienda,
        id_detalles:id_detalles
    }

    Productos.push(producto);
}

export function buscar(id){
    return Productos.filter(producto => producto.id===id);
}


export default Productos;