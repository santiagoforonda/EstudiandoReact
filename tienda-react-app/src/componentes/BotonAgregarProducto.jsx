import React from 'react';
import '../styles/BotonAgregarProducto.css';

function BotonAgregarProducto(props){

    

    const manejarEnvio=(e)=>{
        
        e.preventDefault();
        const productoNuevo={
            id:"aui va el id",
            imagen:"aqui va la imagen",
            descripcion:"aqui va la descripcion",
            cantidad:"",
            precio:"aqui va el precio"
        }
        props.onClick(productoNuevo);
    }

    return(

        <button className='enviar-producto' onClick={manejarEnvio} >
                Agregar al carrito
        </button>

    );

}


export default BotonAgregarProducto;