import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoContador from './imagenes/Logo.png';
import {useState} from 'react';

function App() {

  const [numClics,setNumClics]= useState(0);

  const manejarClic=()=>{
    setNumClics(numClics+1);
  }
  const reiniciarContador=()=>{
    setNumClics(0);
  }



  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamplogo' src={logoContador} alt='logo de freecodecamp'></img>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}></Contador>
        <Boton texto="Clic" esBotondeClick={true} manejarClic={manejarClic}  >

        </Boton>

        <Boton texto="Reiniciar" esBotondeClick={false} manejarClic={reiniciarContador}>

        </Boton>
      </div>
    </div>
  );
}

export default App;
