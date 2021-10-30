import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus, FaRegTrashAlt, FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import CursoService from '../../services/academico/CursoService'

const Curso = (props) => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        const cursos = CursoService.getAll()
        setCursos(cursos)
    }, [])

    function excluir(i) {

        if (window.confirm('Deseja realmente excluir o registro?')) {
            CursoService.delete(i)
            setCursos(CursoService.getAll())
        }
    }

    return (
        <>
            <Box title="Cursos">
                <Link to="/cursos/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Duração</th>
                            <th>Modalidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cursos.map((curso, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/cursos/' + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{curso.nome}</td>
                                <td>{curso.duracao}</td>
                                <td>{curso.modalidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Curso
