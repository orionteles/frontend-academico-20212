import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import CursoService from '../../services/academico/CursoService'
import validador from '../../validators/CursoValidator'

const CursosForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const curso = CursoService.get(id)
            for (let campo in curso) {
                setValue(campo, curso[campo])
            }
        }
    }, [props, setValue])


    function enviarDados(dados) {
        const id = props.match.params.id
        id ? CursoService.update(dados, id) : CursoService.create(dados)
        props.history.push('/cursos')
    }

    return (
        <>
            <Box title="Cursos">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="duracao">
                        <Form.Label column sm={2}>Duração: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("duracao", validador.duracao)} />
                            {errors.duracao && <span className="text-danger">{errors.duracao.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="modalidade">
                        <Form.Label column sm={2}>Modalidade: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("modalidade", validador.modalidade)} />
                            {errors.modalidade && <span className="text-danger">{errors.modalidade.message}</span>}
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

export default CursosForm
