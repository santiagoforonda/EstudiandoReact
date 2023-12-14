import React from "react";
//import {AiOutlineCloseCircle} from "react-icons/ai";
import '../styles/Producto.css';

function Producto({id,imagen,descripcion,cantidad,precio, eliminarProducto}){

    return(
        <div className="producto-contenedor">

            <div className="producto-imagen">
                {imagen}
            </div>


            <div className="producto-descripcion">
                {descripcion}
            </div>
                

            <div className="producto-cantidad">
                {cantidad}
            </div>

            <div className="producto-precio">
                {precio}
            </div>


            <div className="producto-icono" onClick={()=>eliminarProducto(id,precio,cantidad)}>
                <button className="icono">Eliminar</button>
            </div>
        </div>

    );

}

export default Producto;
