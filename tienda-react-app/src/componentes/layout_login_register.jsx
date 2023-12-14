import React from 'react';
import '../styles/layout_login_register.css'

const Layout_Login_Register = ({children})=>{ 
    return(
        <main className='contenedor-de-paginas-lr'>
            <nav className='nav-login-register'><h1>VIRTUAL FIT</h1></nav>
            <section className='contenido-principal'>
                {children}
            </section>
        </main>
    )
}
export default Layout_Login_Register