import React from 'react';
import '../styles/tienda_base.css';
import '../styles/tienda_converse.css';
import LayoutT from '../componentes/layout_tienda';
const Tienda_Base = () => {
  return (
    <LayoutT>
        <section className="contenedor-tarjetas-tienda">
            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_910410-MCO51754690220_092022-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_818372-MCO54905563345_042023-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_712256-MCO54944527905_042023-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_992535-MCO71897665402_092023-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_684437-MCO72196630804_102023-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_948216-MCO69125978271_042023-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_709737-MCO52071349583_102022-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_948595-MCO51753575417_092022-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_994806-MCO69335267858_052023-O.webp"/>
            </article>
        </section>
    </LayoutT>
  );
};

export default Tienda_Base;
