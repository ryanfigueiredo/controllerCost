const INITIAL_STATE = {
    nome: "",
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "NOME_CHANGED":
            return { ...state, nome: action.payload }
        case "DEPARTAMENTO_SEARCHED":
            return { ...state, list: action.payload.data }
        case "DEPARTAMENTO_CLEAR":
            return { ...state, nome: '' }
        default:
            return state
    }
}