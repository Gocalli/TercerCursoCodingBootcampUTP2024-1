import { Buttons } from './componentes/controlladorButton';
import { Pantalla } from './componentes/controlladorPantalla';
import { useState } from 'react';
import { create, all } from 'mathjs'
import './App.css';

const math = create(all)

function App() {

  const [ numb, setNumb ] = useState("")

  const agregarValor = (pressNumber) => {
    setNumb(numb + pressNumber) 
  }

  const deleteNumb = () => {
    setNumb("")
  }

  const equalNumb = () => {
    setNumb(math.evaluate(numb))
  }

  return (
    <div className='contenedor-principal'>
      <Pantalla showNumb={numb}></Pantalla>
      <div className='numbers'>
        <Buttons saveNumb={agregarValor}>+</Buttons>
        <Buttons saveNumb={agregarValor}>-</Buttons>
        <Buttons saveNumb={agregarValor}>*</Buttons>
        <Buttons saveNumb={agregarValor}>/</Buttons>
        <Buttons saveNumb={agregarValor}>1</Buttons>
        <Buttons saveNumb={agregarValor}>2</Buttons>
        <Buttons saveNumb={agregarValor}>3</Buttons>
        <Buttons saveNumb={agregarValor}>4</Buttons>
        <Buttons saveNumb={agregarValor}>5</Buttons>
        <Buttons saveNumb={agregarValor}>6</Buttons>
        <Buttons saveNumb={agregarValor}>7</Buttons>
        <Buttons saveNumb={agregarValor}>8</Buttons>
        <Buttons saveNumb={agregarValor}>9</Buttons>
        <Buttons saveNumb={agregarValor}>0</Buttons>
        <Buttons saveNumb={equalNumb}>=</Buttons>
        <Buttons saveNumb={deleteNumb}>Borrar</Buttons>
      </div> 
    </div>
  );
}

export default App;
