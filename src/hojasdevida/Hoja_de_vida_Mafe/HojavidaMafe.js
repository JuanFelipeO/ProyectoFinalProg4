// Cargas de librerias
import React from 'react';
import './css/HojavidaFelipe.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//import { imgprofile } from './assets/img/profile.jpg';
// Carga de componentes hijos
// Carga de otros elementos (CSS, IMAGES)

function HojaVidaMafe(){
  return (
    <Container>
      <Row>
        <Col>
        <div class="noshow">
          <h1>-----------------</h1>
        </div>
        </Col>
        <Col>
        <div class="noshow">
          <h1>-----------------</h1>
        </div>
        </Col>
      </Row>
      <Row>
      <Col>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="#abaout">Sobre mi</Nav.Link>
        <Nav.Link href="#experiencia">Experencia</Nav.Link>
        <Nav.Link href="#habilidades">Habilidades</Nav.Link>
      </Nav>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./assets/img/profile.jpg" />
         <Card.Body>
          <Card.Title>Maria Fernanda Cortes Marin</Card.Title>
            <Card.Text>
              Calle 49 # 17 a 17 San Jorge· Manizales (Caldas) · (312) 8902204 ·
              <a href="mailto:mfcortes67740@umanizales.edu.co"> mfcortes67740@umanizales.edu.co</a>
            </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </Row>
    <Row>
      <Col>
      <div class="textos" id="about">
        <h1>SOBRE MI</h1>
        Estudiante de noveno semestre de Ingeniería en Sistemas y telecomunicaciones, con conocimientos tecnicos en sistemas y en parte de 
        tecnologia actual, con gusto por las inversiones y con habilidades para practicarla. Competencias como perseverancia, sensibilidad a lineamientos,
        orientación al servicio, orientación al logro y aprendizaje continuo.
      </div>
      </Col>
    </Row>
    <Row>
      <Col>
      <div class="textos" id="experiencia">
        <h1>EXPERIENCIA</h1>
        <h3>Desarrollo paginas web</h3>
        <h4>Star Inmobiliaria</h4>
        Construcción y adecuacion de pagina Web para empresa del sector inmobiliario.
      </div>
      </Col>
    </Row>
    <Row>
      <Col>
      <div class="textos" id="experiencia">
        <h1>EDUCACIÓN</h1>
        <h3 >Universidad de Manizales</h3>
        Ingeniería de Sistemas y telecomunicaciones
        <h5>Febrero 2016 - Presente</h5>
        <h3>Institucion Educativa Escuela Nacional Auxiliares de Enfermeria</h3>
          Bachiller - Tecnico en Administración en Salud
        <h5>Noviembre 2014</h5>
      </div>
      </Col>
    </Row>
    <Row>
      <Col>
      <div class="textos" id="habilidades">
        <h1>HABILIDADES</h1>
          Manejo de algunos lenguajes de programción tales como:
          <ul>
            <li>
              HTML
            </li>
            <li>
              Angular
            </li>
            </ul>
      </div>
      </Col>
    </Row>
  </Container>
  );
}

export { HojaVidaMafe };