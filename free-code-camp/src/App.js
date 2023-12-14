import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dice la gente</h1>
      <Testimonio
      nombre='Emma Bostian'
      pais='Suecia'
      cargo='Ingeniera de software'
      descripcion='Me gusta la ingenieria :v'
      empresa='Spotify'
      imagen='emma'
      ></Testimonio>

      <Testimonio
      nombre='Sarah'
      pais='Colombia'
      cargo='Ingeniera de software'
      descripcion='Me gusta la ingenieria :v'
      empresa='KFC'
      imagen='sarah'
      ></Testimonio>


      <Testimonio
      nombre='Shawn'
      pais='China'
      cargo='Ingeniero de software'
      descripcion='Me gusta la ingenieria :v'
      empresa='Amazon'
      imagen='shawn'
      ></Testimonio>

      </div>
      
    </div>
  );
}

export default App;
