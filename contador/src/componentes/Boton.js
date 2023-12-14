import React from "react";
import '../Estilos/Boton.css';

function Boton({texto, esBotondeClick, manejarClic}){
    return(
        <button className={esBotondeClick? "boton-clic": "boton-reiniciar"}
        onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton; 