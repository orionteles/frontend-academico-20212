import mensagens from "./mensagens"

const DisciplinaValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
    curso_id: {
        required: mensagens.required,
    },
}

export default DisciplinaValidator