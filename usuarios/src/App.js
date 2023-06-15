import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cliente from './components/Cliente'
import Header from './components/Header';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';


function App() {
  
  // Iniciamos nuestro local storage
  let clientesGuardados = JSON.parse(localStorage.getItem('clientes'));
  if(!clientesGuardados){
    clientesGuardados =[]
  };

  // Generar hook de estado con los diferentes clientes de la veterinaria
  const [clientes, editarClientes] = useState(clientesGuardados);

  //Hook useEffect: Sirve para ejecutar una funcionalidad cuando hay un cambio en alguna variable/hook/situacion
  useEffect( () => {
    if (clientesGuardados){
      localStorage.setItem('clientes',JSON.stringify(clientes));
    } else {
      localStorage.setItem('clientes',JSON.stringify([]));
    }
  }, [clientesGuardados]);

  // Funcion que toma el socio nuevo y lo agrega en el array de clientes
  const agregarCliente = (socio) => {
    editarClientes([
      ...clientes,
      socio
    ])
  };

  // Funcion para borrar clientes
  const borrarCliente = (id) => {
    const nuevosClientes = clientes.filter( cliente => cliente.id !== id);
    editarClientes(nuevosClientes);
  };

  // Mensaje para el titulo de la lista de clientes
  let mensaje = 'clientes registrados';

  return (
    <div>
      <Header/>
      <Container>
        <Row>
          <Col><h1 className="text-warning text-center"><b>Registro de Clientes del Estudio Contable</b></h1></Col>
        </Row>
        <Row>
          <Col>
            <Formulario
              agregarCliente={agregarCliente}
            />
          </Col>
          
          <Col>
            {
              clientes.length > 0
                ? <h3>Listado { mensaje }</h3>
                : <h3>No hay { mensaje }</h3>
            }

            {
              clientes.map( cliente=>
                <Cliente
                  cliente={cliente}
                  key={cliente.id}
                  borrarCliente={borrarCliente}
                />
              )
            }
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
