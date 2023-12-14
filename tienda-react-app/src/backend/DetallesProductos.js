import {v4 as uuidv4} from 'uuid';

var listaDetallesProductos = [];

export function agregar(descripcion,id_talla, id_tipo,id_color, id_genero){
    var detallesProducto = {
        id:uuidv4(),
        descripcion: descripcion,
        id_talla:id_talla,
        id_tipo:id_tipo,
        id_color: id_color,
        id_genero:id_genero
    }
    listaDetallesProductos.push(detallesProducto);
}


export default listaDetallesProductos;