const INITIAL_STATE = {
    descricao: "",
    valor: "",
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "DESCRICAO_CHANGED":
            return { ...state, descricao: action.payload }
        case "VALOR_CHANGED":
            return { ...state, valor: action.payload }
        case "MOVIMENTACAO_SEARCHED":
            return { ...state, list: action.payload.data }
        case "MOVIMENTACAO_CLEAR":
            return { ...state, descricao: '', valor: "" }
        default:
            return state
    }
}