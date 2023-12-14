import React from 'react';
import '../styles/tienda_base.css';
import '../styles/tienda_koaj.css'
import LayoutT from '../componentes/layout_tienda';
const Tienda_Base = () => {
  return (
    <LayoutT>
        <section className="contenedor-tarjetas-tienda">
            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_987404-MCO44155143151_112020-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_804685-MCO44155038302_112020-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_652499-MCO72006602643_092023-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_738373-MCO53534491062_012023-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_856397-MCO51592748307_092022-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_613064-MCO31561374407_072019-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_610218-MCO52736030425_122022-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_682798-MCO53305874858_012023-O.webp"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_835644-MCO53973183776_022023-O.webp"/>
            </article>
        </section>
    </LayoutT>
  );
};

export default Tienda_Base;
