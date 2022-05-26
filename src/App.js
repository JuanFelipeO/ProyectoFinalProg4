import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function hv()
{
  <h1>Hola soy la funcion de la hoja de vida</h1>
}

function App() {
  return (
    <nav class="menu">
      <ul>
        <li><a href="#">Enlace 1</a></li>
        <li><a href="#">Enlace 2</a>
          <ul>
            <li><a href="#">Enlace 2.1</a></li>
            <li><a href="#">Enlace 2.2</a></li>
            <li><a href="#">Enlace 2.3</a></li>
          </ul>
      </li>
      <li><a href="#">Enlace 3</a></li>
      <li><a href="#">Enlace 4</a></li>
      <li><a href="#">Enlace 5</a></li>
    </ul>
    </nav>
  );
}

export default App;
