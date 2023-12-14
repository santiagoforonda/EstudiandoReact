import {v4 as uuidv4} from 'uuid';

var Compras = []


export function agregar(id_detalles,fecha){
    var compra = {
        id:uuidv4(),
        fecha:fecha,
        id_detalles: id_detalles
    }
    Compras.push(compra);
}

export default Compras;