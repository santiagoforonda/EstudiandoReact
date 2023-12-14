import './App.css';
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom'
import { useState } from 'react';
import Login_Register from './paginas/login_register'
import Inicio from './paginas/inicio';
import Tienda_Totto from './paginas/tienda_totto';
import Tienda_Koaj from './paginas/tienda_koaj';
import Carrito from './paginas/carrito';
/*import MisCompras from './paginas/mis_compras';*/
import MiCuenta from './paginas/mi_cuenta';
import Tienda_Converse from './paginas/tienda_converse';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
library.add(faCoffee, faUser, faCog);
function App() {


  

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login_Register />}/>
          <Route path='/inicio' element={<Inicio />}/>
          <Route path='/carrito' element={<Carrito />}/>
          {/*<Route path='/mis-compras' element={<MisCompras />}/>*/}
          <Route path='/mi-cuenta' element={<MiCuenta />}/>
          <Route path='/tienda-totto' element={<Tienda_Totto />}/>
          <Route path='/tienda-koaj' element={<Tienda_Koaj />}/>
          <Route path='/tienda-converse' element={<Tienda_Converse />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
