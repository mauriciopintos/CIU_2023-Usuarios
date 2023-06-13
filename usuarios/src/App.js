import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';

function App() {
  
  // Generar hook de estado con los diferentes clientes de la veterinaria
  const [clientes, editarClientes] = useState([]);

  // Funcion que toma el socio nuevo y lo agrega en el array de clientes
  const agregarCliente = (socio) => {
    editarClientes([
      ...clientes,
      socio
    ])
  };

  return (
    <div>
      <Container>
        <Row>
          <Col><h1 className="text-warning text-center "><b>Ingreso de Socios del Estudio Contable</b></h1></Col>
        </Row>
        <Row>
          <Col>
            <Formulario
              agregarCliente={agregarCliente}
            />
          </Col>
          
          <Col>Listado de usuarios</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
