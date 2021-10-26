import React from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import validador from '../../validators/ProfessorValidator'

const ProfessoresForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm()

    function enviarDados(dados){
        console.log(dados);
    }    

    return (
        <>
            <Box title="Professores">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="cpf">
                        <Form.Label column sm={2}>CPF: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("cpf", validador.cpf)} />
                            {errors.cpf && <span className="text-danger">{errors.cpf.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="matricula">
                        <Form.Label column sm={2}>Matrícula: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("matricula", validador.matricula)} />
                            {errors.matricula && <span className="text-danger">{errors.matricula.message}</span>}
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/cursos"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default ProfessoresForm
