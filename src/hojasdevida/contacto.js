import React from "react";
import './Hoja_de_vida_Felipe/css/HojavidaFelipe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contacto()
{
  return(
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
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo electronico:</Form.Label>
          <Form.Control type="email" placeholder="alguien@dominio.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </Col>
  </Row>
</Container>
  );
}
export { Contacto }