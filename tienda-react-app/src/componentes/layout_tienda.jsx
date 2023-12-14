import React from 'react'
import Header from './header'
import '../styles/layout_ingresado.css'
import '../styles/layout_tienda.css'

const Layout_Tienda = ({children})=>{ 
    return (
      <main className='contenedor-de-paginas-li'>
        <Header/>
        <section className='contenido-principal'>
          {children}
        </section>
      </main>
    )
}
export default Layout_Tienda