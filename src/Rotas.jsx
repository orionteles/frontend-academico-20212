import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CursosForm from './pages/cursos/CursosForm'
import Alunos from './pages/alunos/Alunos'
import AlunosForm from './pages/alunos/AlunosForm'
import ProfessoresForm from './pages/professores/ProfessoresForm'
import Curso from './pages/cursos/Curso'

const Rotas = () => {
    return (
        <Container className="mt-3">
            <Switch>
                <Route exact path="/" component={Curso} />
                <Route exact path="/cursos" component={Curso} />
                <Route exact path="/cursos/create" component={CursosForm} />
                <Route exact path="/cursos/:id" component={CursosForm} />
                <Route exact path="/alunos" component={Alunos} />
                <Route exact path="/alunos/create" component={AlunosForm} />
                <Route exact path="/alunos/:id" component={AlunosForm} />
                <Route exact path="/professores" component={ProfessoresForm} />
            </Switch>
        </Container>
    )
}

export default Rotas
