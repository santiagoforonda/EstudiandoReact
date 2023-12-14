import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LayoutI from '../componentes/layout_ingresado';
import '../styles/inicio.css';
import TottoLogo from '../media/marcas/totto-logo.jpg.png';
import KoajLogo from '../media/marcas/koaj-logo.jpg.jpg';
import ConverseLogo from '../media/marcas/converse-logo.jpg.jpg';

const Inicio = () => {
  const navigate = useNavigate();

  const handleCardClick = (marca) => {
    navigate(`/${marca}`);
  };

  return (
    <LayoutI>
      <section className="contenedor-tarjetas-marcas">
        <article className="tarjeta-marca" onClick={() => handleCardClick('tienda-totto')}>
          <img src={TottoLogo} className='logo-carta' alt="Totto Logo" />
        </article>

        <article className="tarjeta-marca" onClick={() => handleCardClick('tienda-koaj')}>
          <img src={KoajLogo} className='logo-carta' alt="Koaj Logo" />
        </article>

        <article className="tarjeta-marca" onClick={() => handleCardClick('tienda-converse')}>
          <img src={ConverseLogo} className='logo-carta' alt="Converse Logo" />
        </article>
      </section>
    </LayoutI>
  );
};

export default Inicio;
