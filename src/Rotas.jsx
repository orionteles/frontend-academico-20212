import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CursosForm from './pages/cursos/CursosForm'
import AlunosForm from './pages/alunos/AlunosForm'
import ProfessoresForm from './pages/professores/ProfessoresForm'

const Rotas = () => {
    return (
        <Container className="mt-3">
            <Switch>
                <Route exact path="/" component={CursosForm} />
                <Route exact path="/cursos" component={CursosForm} />
                <Route exact path="/alunos" component={AlunosForm} />
                <Route exact path="/professores" component={ProfessoresForm} />
            </Switch>
        </Container>
    )
}

export default Rotas
