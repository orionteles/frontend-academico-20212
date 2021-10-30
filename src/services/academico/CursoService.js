class CursoService {
    
    getAll() {
        const cursos = localStorage.getItem('cursos')
        return cursos ? JSON.parse(cursos) : []
    }

    get(id) {
        const cursos = this.getAll()
        return cursos[id]
    }

    create(dados) {
        const cursos = this.getAll()
        cursos.push(dados)

        localStorage.setItem('cursos', JSON.stringify(cursos))
    }

    update(dados, id) {
        const cursos = this.getAll()
        cursos.splice(id, 1, dados)
        localStorage.setItem('cursos', JSON.stringify(cursos))
    }

    delete(id) {
        const cursos = this.getAll()
        cursos.splice(id, 1)
        localStorage.setItem('cursos', JSON.stringify(cursos))
    }
}

export default new CursoService()