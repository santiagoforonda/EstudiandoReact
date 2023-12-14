
import './App.css';
import logo from './Imagenes/logo.png';
import Boton from './Componentes/Boton';
import Pantalla from './Componentes/Pantalla';
import Clear from './Componentes/Clear';
import {useState} from 'react';
import { evaluate } from 'mathjs';

function App() {


  const [input, setInput] = useState('');

  const agregarInput=val=>{
    setInput(input + val);
  };

  const calcular=()=>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert("ingrese valores numericos");
    }
    
  };



  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={logo} className="logo" alt='Logo de la calculadora'></img>

      </div>
      
      <div className='contenedor-calculadora'>
      <Pantalla input={input}></Pantalla>
        <div className='fila' >
          <Boton manejarClicl={agregarInput}>1</Boton>
          <Boton manejarClicl={agregarInput}>2</Boton>
          <Boton manejarClicl={agregarInput}>3</Boton>
          <Boton manejarClicl={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClicl={agregarInput}>4</Boton>
          <Boton manejarClicl={agregarInput}>5</Boton>
          <Boton manejarClicl={agregarInput}>6</Boton>
          <Boton manejarClicl={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClicl={agregarInput}>7</Boton>
          <Boton manejarClicl={agregarInput}>8</Boton>
          <Boton manejarClicl={agregarInput}>9</Boton>
          <Boton manejarClicl={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClicl={calcular}>=</Boton>
          <Boton manejarClicl={agregarInput}>0</Boton>
          <Boton manejarClicl={agregarInput}>.</Boton>
          <Boton manejarClicl={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Clear manejarClear={()=> setInput('')}>Limpiar</Clear>
        </div>

      </div>
    </div>
  );
}

export default App;
