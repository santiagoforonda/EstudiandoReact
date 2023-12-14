import {v4 as uuidv4} from 'uuid';
var listaDetallesCompra = [];


export function agregarDetallesCompra(cantidad,id_producto,id_compra){
    var detalles = {
        id:uuidv4(),
        cantidad:cantidad,
        id_producto: id_producto,
        id_compra:id_compra
    }
    listaDetallesCompra.push(detalles);
}


export default listaDetallesCompra;




