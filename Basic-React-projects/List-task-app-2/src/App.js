import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import ListaDeTarea from './componentes/ListaDeTarea';

function App() {
  return (
    <div className="aplicacion-tarea">
       <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo de freecodecamp"
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTarea/>     
      </div>
    </div>
  );
}

export default App;
