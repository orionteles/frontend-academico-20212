import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">Acadêmico</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/cursos">Cursos</Link>
                    <Link className="nav-link" to="/disciplinas">Disciplinas</Link>
                    <Link className="nav-link" to="/alunos">Alunos</Link>
                    <Link className="nav-link" to="/professores">Professores</Link>
                    <Link className="nav-link" to="/turmas">Turmas</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Menu
