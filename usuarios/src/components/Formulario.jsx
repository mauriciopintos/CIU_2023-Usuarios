import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';

const Formulario = ({agregarCliente}) => {

    // Creamos un socio y lo inicializamos con un hook de estado
    const [socio, editarSocio] = useState({
        nombre:"",
        dni:""
    });

    // Extraer los valores
    const {nombre, dni} = socio;

    // Hook de estado para manejar el error
    const [error, setError] = useState(false);

    // Recogemos lo que el usuario escribe en el formulario
    const handleChange = (e) => {
        editarSocio({
            ...socio,
            [e.target.name] : e.target.value
        })

        // console.log("Tomo los datos...");
    };

    // Cuando envia el formulario se ejecuta esta funcion
    const submitForm = (e) => {
        e.preventDefault();

        // console.log("Enviado");

        if(nombre.trim() === '' || dni.trim() === '') {
            setError(true);
            return;
        }
        
        setError(false);
        
        // uuid
        socio.id = uuid();
        console.log(socio);

        // Guardar el socio
        agregarCliente(socio);

        // Limpiar el formulario
        editarSocio({
            nombre:"",
            dni:""
        })

    };

    return ( 
        <Fragment>
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre completo"
                        name="nombre"
                        onChange={handleChange}
                        value={nombre} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Sin puntos ni espacios"
                        name="dni"
                        onChange={handleChange}
                        value={dni} />
                </Form.Group>
                <Button className='mt-3'
                    variant="success"
                    type="submit">
                    Ingresar Socio
                </Button>
            </Form>
            {/* Utilizo un operador (condicional) ternario (if en un sola linea), pero se puede utilizar cualquier otra altenativa */}
            {
                error
                ? <h4>Por favor complete todos los campos</h4>
                : null
            }
        </Fragment>
    );
}
 
export default Formulario;