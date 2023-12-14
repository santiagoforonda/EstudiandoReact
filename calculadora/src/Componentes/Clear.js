import React from "react";
import "../Estilos/Clear.css";

const Clear = (props)=>(

    <div className="boton-clear" onClick={props.manejarClear}>
        {props.children}
    </div>

);

export default Clear;