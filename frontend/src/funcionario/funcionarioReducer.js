const INITIAL_STATE = {
    nomeFuncionario: "",
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "NOME_CHANGED":
            return { ...state, nomeFuncionario: action.payload }
        case "FUNCIONARIO_SEARCHED":
            return { ...state, list: action.payload.data }
        case "FUNCIONARIO_CLEAR":
            return { ...state, nomeFuncionario: '' }
        default:
            return state
    }
}
