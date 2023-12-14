import React from 'react';
import '../styles/tienda_base.css';
import '../styles/tienda_totto.css'
import LayoutT from '../componentes/layout_tienda';
const Tienda_Base = () => {
  return (
    <LayoutT>
        <section className="contenedor-tarjetas-tienda">
            <article className="tarjetas-producto">
                <img src="https://tottocl.vteximg.com.br/arquivos/ids/263010-1000-1000/MA05DAT001-21200-NG0_1.jpg?v=638234732966330000"/>
            </article>

            <article className="tarjetas-producto">
                <img src="https://tottocl.vteximg.com.br/arquivos/ids/276269-1000-1000/MA02IND722-22200-M50_1.jpg?v=638234926350500000" alt="" />
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_759915-MLA53487427379_012023-O.webp" alt="" />
            </article>

            <article className="tarjetas-producto">
                <img src="https://pycca.vteximg.com.br/arquivos/ids/226121-600-600/image-40caa1de6b9d414198144f0fe3fb6480.jpg?v=638012028954030000" alt="" />
            </article>

            <article className="tarjetas-producto">
                <img src="https://agaval.vtexassets.com/arquivos/ids/927778/10014401AH929-1.jpg?v=638101041802230000" alt="" />
            </article>

            <article className="tarjetas-producto">
                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_798890-MLU72840647809_112023-F.webp" alt="" />
            </article>

            <article className="tarjetas-producto">
                <img src="https://www.batista.com.co/cdn/shop/files/TEMPERA9IR1099001.jpg?v=1699314491&width=700" alt="" />
            </article>

            <article className="tarjetas-producto">
                <img src="https://www.batista.com.co/cdn/shop/files/TEMPERA4YN1099001.jpg?v=1699314267&width=700" alt="" />
            </article>

            <article className="tarjetas-producto">
                <img src="https://www.batista.com.co/cdn/shop/files/vanjasn01899001.jpg?v=1699135690&width=700" alt="" />
            </article>
        </section>
    </LayoutT>
  );
};

export default Tienda_Base;
