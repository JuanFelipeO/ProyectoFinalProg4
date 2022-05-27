import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { HojaVidaFelipe } from './hojasdevida/Hoja_de_vida_Felipe/HojaVidaFelipe';
import { HojaVidaMafe } from './hojasdevida/Hoja_de_vida_Mafe/HojavidaMafe';
import { Contacto } from './hojasdevida/contacto';
import Figure from 'react-bootstrap/Figure';

function Chao(){
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="./Universidad-de-Manizales.png"
      />
      <Figure.Caption>
        Futuros ingenieros de sistemas
      </Figure.Caption>
    </Figure>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav class="menu">
        <ul>
          <li>
            <Link to="/"> Inicio</Link>
          </li>
          <li>
            <Link to="/hojadeviajuanfelipe"> Hoja de vida Juan Felipe</Link>
          </li>
          <li>
            <Link to="/hojadevidamariafernanda"> Hoja de vida Maria Fernanda</Link>
          </li>
          <li>
            <Link to="/contactenos"> Contactanos</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Chao/>}/>
        <Route path="/hojadeviajuanfelipe" element={<HojaVidaFelipe/>}/>
        <Route path="/hojadevidamariafernanda" element={<HojaVidaMafe/>}/>
        <Route path="/contactenos" element={<Contacto/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
