import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = ({redsocial}) => {
    // Acá va el codigo js necesario
    // calculamos el año corriente
    const fecha = new Date().getFullYear();
    return (
        <div className="App-footer bg-secondary text-light">
            <div className="mt-5 container text-center">              
                <Row>
                    <Col>
                        <p>Construcción de Interfáces de Usuario - UNaHur</p>
                    </Col>
                    <Col>
                        <p>Todo el contenido es utilizado con fínes didácticos</p>
                    </Col>
                </Row>
                <Row>
                    <p>Mauricio Pintos - © {fecha} Todos los derechos reservados</p>
                </Row>
            
                {/* Datos de contacto */}
                <Row className="inline">
                    <Col>
                        <ul className="list-inline">
                            <li className="list-inline-item"><h6>Contacto:</h6></li>
                            <li className="list-inline-item"><i className="fas fa-envelope"></i> <a href="mailto:gestionestudiantil@unahur.edu.ar" className='text-info'>gestionestudiantil@unahur.edu.ar</a></li>
                            <li className="list-inline-item"><i className="fab fa-whatsapp"></i> <a href="https://wa.me/5491120785200" className='text-info'>(+54) 11 2078-5200</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Footer;