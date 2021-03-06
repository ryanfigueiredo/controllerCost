const INITIAL_STATE = {
    nomeDepartamento: "",
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "NOME_CHANGED":
            return { ...state, nomeDepartamento: action.payload }
        case "DEPARTAMENTO_SEARCHED":
            return { ...state, list: action.payload.data }
        case "DEPARTAMENTO_CLEAR":
            return { ...state, nomeDepartamento: '' }
        default:
            return state
    }
}