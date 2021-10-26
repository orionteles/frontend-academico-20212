import React, { useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import { FaCheck, FaArrowLeft } from 'react-icons/fa'

const CursosForm = () => {

    const [dados, setDados] = useState({})

    function handleDados(event){
        const valor = event.target.value
        const name = event.target.name

        setDados({...dados, [name]: valor});
    }

    function handleSubmit(){
        console.log(dados);
    }

    return (
        <>
            <Box title="Cursos">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="nome" onChange={handleDados} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="duracao">
                        <Form.Label column sm={2}>Duração: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" name="duracao" onChange={handleDados}  />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="modalidade">
                        <Form.Label column sm={2}>Modalidade: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="modalidade" onChange={handleDados}  />
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/cursos"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default CursosForm
