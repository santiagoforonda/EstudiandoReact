import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import logo from './Imagenes/logo.png';



function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img src={logo} className='logo' alt='logo de santyman'></img>
      </div>

      <div className='tareas-principal'>
        <h1>Mis tareas</h1>
          <ListaDeTareas></ListaDeTareas>
      </div>
    
    </div>
  );
}

export default App;
