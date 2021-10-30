import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { mask, unMask } from 'remask'
import Box from '../../components/Box'
import apiCep from '../../services/apiCep'
import AlunoService from '../../services/academico/AlunoService'
import validador from '../../validators/AlunoValidator'

const AlunosForm = (props) => {


    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id
        if (id) {
            const aluno = AlunoService.get(id)
            for (let campo in aluno) {
                setValue(campo, aluno[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? AlunoService.update(dados, id) : AlunoService.create(dados) 
        props.history.push('/alunos')
    }

    function handleChange(event) {
        const name = event.target.name
        const mascara = event.target.getAttribute('mask')

        let valor = unMask(event.target.value)
        valor = mask(valor, mascara)

        setValue(name, valor)
    }

    function handleCep(event) {

        const valor = unMask(event.target.value)

        apiCep.get(`/ws/${valor}/json/`).then(resultado => {
            const endereco = resultado.data

            setValue('logradouro', endereco.logradouro)
            setValue('complemento', endereco.complemento)
            setValue('uf', endereco.uf)
            setValue('municipio', endereco.localidade)
            setValue('bairro', endereco.bairro)
        })
    }

    return (
        <>
            <Box title="Alunos">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="data">
                        <Form.Label column sm={2}>Data: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("data")} mask="99/99/9999" onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="cpf">
                        <Form.Label column sm={2}>CPF: </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                {...register("cpf", validador.cpf)}
                                mask="999.999.999-99"
                                onChange={handleChange}
                            />
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
                    <Form.Group as={Row} className="mb-3" controlId="email">
                        <Form.Label column sm={2}>E-mail: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" {...register("email", validador.email)} />
                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="telefone">
                        <Form.Label column sm={2}>Telefone: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("telefone")} mask="(99) 99999-9999" onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="cep">
                        <Form.Label column sm={2}>CEP: </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                {...register("cep")}
                                mask="99.999-999"
                                onChange={handleChange}
                                onBlur={handleCep}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="uf">
                        <Form.Label column sm={2}>UF: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("uf")} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="municipio">
                        <Form.Label column sm={2}>Município: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("municipio")} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="logradouro">
                        <Form.Label column sm={2}>Logradouro: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("logradouro")} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="complemento">
                        <Form.Label column sm={2}>Complemento: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("complemento")} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="numero">
                        <Form.Label column sm={2}>Número: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("numero")} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="bairro">
                        <Form.Label column sm={2}>Bairro: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("bairro")} />
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/alunos"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default AlunosForm
