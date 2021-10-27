class CursoService {
    
    getAll() {
        const cursos = localStorage.getItem('cursos')
        return cursos ? JSON.parse(cursos) : []
    }

    get(id) {

    }

    create(dados) {
        const cursos = this.getAll()
        cursos.push(dados)

        localStorage.setItem('cursos', JSON.stringify(cursos))
    }

    update(dados) {

    }

    delete(id) {

    }
}

export default new CursoService()