import React from 'react';
import '../Estilos/Testimonio.css';

export function Testimonio(props){
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt='Foto de'><p>props.nombre</p></img>
            <div className='contenedor-textoTestimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre}</strong> en  <strong> {props.pais}</strong> </p>
                <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className='descripcion-testimonio'>{props.descripcion}</p>
            </div>
        </div>
    );
}

export default Testimonio
