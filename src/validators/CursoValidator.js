import mensagens from "./mensagens"

const CursoValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
    modalidade: {
        required: mensagens.required,
        minLength: {value: 1, message: mensagens.maxLength + ': 1'},
        maxLength: {value: 1, message: mensagens.maxLength + ': 1'}
    },
}

export default CursoValidator