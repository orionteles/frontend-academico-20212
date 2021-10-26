import mensagens from "./mensagens"

const AlunoValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
    cpf: {
        required: mensagens.required,
        minLength: {value: 14, message: mensagens.minLength + ': 14'}, 
        maxLength: {value: 14, message: mensagens.maxLength + ': 14'}
    },
    email: {
        required: mensagens.required,
        maxLength: {value: 100, message: mensagens.maxLength + ': 100'}
    },
    matricula: {
        minLength: {value: 2, message: mensagens.minLength + ': 2'}, 
        maxLength: {value: 20, message: mensagens.maxLength + ': 20'}, 
    },
    telefone: {
        minLength: {value: 14, message: mensagens.minLength + ': 14'}, 
        maxLength: {value: 15, message: mensagens.maxLength + ': 15'}, 
    }
}

export default AlunoValidator