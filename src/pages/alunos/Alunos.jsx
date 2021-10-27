import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import AlunoService from '../../services/academico/AlunoService'

const Alunos = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(()=>{
        const alunos = AlunoService.getAll()
        setAlunos(alunos)
    }, [])

    return (
        <>
            <Box title="Alunos">
                <Link to="/alunos/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((aluno, i) => (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.cpf}</td>
                                <td>{aluno.telefone}</td>
                                <td>{aluno.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Alunos
