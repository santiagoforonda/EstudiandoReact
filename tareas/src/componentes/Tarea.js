import React from "react";
import "../Estilos/Tarea.css";
import {AiOutlineCloseCircle} from "react-icons/ai";

function Tarea({id,texto, completada, completarTarea, eliminarTarea}){

    return(
        <div className={completada? 'tarea-contenedor completada': 'tarea-contenedor'}>
            <div className="tarea-texto" onClick={()=> completarTarea(id)}>
                {texto}
            </div>
            <div className="tarea-icono" onClick={()=> eliminarTarea(id)}>
                <AiOutlineCloseCircle className="icono"></AiOutlineCloseCircle>
            </div>
        </div>



    );

}

export default Tarea;

