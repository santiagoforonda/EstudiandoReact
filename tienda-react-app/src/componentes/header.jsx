import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faShoppingCart, faShoppingBag, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import '../styles/layout_ingresado.css'

const Header = () => {
  const navigate = useNavigate()
  const [desplegarOpciones, verOpcionesDesplegar] = useState(false)

  const verOpciones = () => {
    verOpcionesDesplegar(!desplegarOpciones)
  }
  const cerrarSesion = () => {
    navigate('/')
  }
  const irAInicio = () => {
    navigate('/inicio')
  }
  const irAMisCompras = () => {
    navigate('/mis-compras')
  }
  const irACarrito = () => {
    navigate('/carrito')
  }
  const irAMiCuenta = () => {
    navigate('/mi-cuenta')
  }
  return (
    <nav className='nav-ingresado'>
      <h1>VIRTUAL FIT</h1>
      <FontAwesomeIcon className='svg-bar' icon={faBars} onClick={verOpciones} />
      {desplegarOpciones && (
        <section className='opciones-desplegadas'>
          <article className='opciones-barra' onClick={irAInicio}>
            <FontAwesomeIcon icon={faHome} className='svg-opciones'/>
            <span>Inicio</span>
          </article>
          <article className='opciones-barra' onClick={irAMisCompras}>
            <FontAwesomeIcon icon={faShoppingBag} className='svg-opciones'/>
            <span>Mis Compras</span>
          </article>
          <article className='opciones-barra' onClick={irACarrito}>
            <FontAwesomeIcon icon={faShoppingCart} className='svg-opciones'/>
            <span>Carrito</span>
          </article>
          <article className='opciones-barra' onClick={irAMiCuenta}>
            <FontAwesomeIcon icon={faUser} className='svg-opciones'/>
            <span>Mi Cuenta</span>
          </article>
          <article className='opciones-barra' onClick={cerrarSesion}>
            <FontAwesomeIcon icon={faSignOutAlt} className='svg-opciones' />                    
            <span>Cerrar Sesión</span>
          </article>
        </section>
      )}
    </nav>
  )
}
export default Header