import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
//import {Indexhvfelipe} from './hojasdevida/Hoja_de_vida_Felipe/Indexhvfelipe';
import {Hola} from './hojasdevida/Hoja_de_vida_Felipe/Hola';



function Chao(){
  return (
    <div>
      <h1>Entraste en chao</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav class="menu">
        <ul>
        <li>
            <Link to="/"> Hoja de vida Juan Felipe</Link>
          </li>
          <li>
          <Link to="/hojadevidajuanfelipe"> Hoja de vida Maria Fernanda</Link>
          </li>
          <li>
          <Link to="/contactenos"> Contactanos</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Chao/>}/>
        <Route path="/contactenos" element={<Hola/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
