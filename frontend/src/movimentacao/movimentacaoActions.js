import axios from 'axios'
import { URLMovimentacao } from '../utils/URLS'

export const changeDescricaoMovimentacao = (event) => ({
    type: 'DESCRICAO_CHANGED',
    payload: event.target.value
})

export const changeValorMovimentacao = (event) => ({
    type: 'VALOR_CHANGED',
    payload: event.target.value
})

export const search = (descricao) => {
    const search = descricao ? `/searchByDescription/${descricao}` : ""
    const request = axios.get(`${URLMovimentacao}${search}`)
    return {
        type: 'MOVIMENTACAO_SEARCHED',
        payload: request
    }
}

export const add = (descricao, valor) => {
    const select = document.getElementById("selectFuncionario")
    const funcionarioId = select.options[select.selectedIndex].value
    return dispatch => {
        axios.post(URLMovimentacao, { descricao, valor, funcionarioId })
            .then(resp => dispatch(clear()))
    }

}

export const remove = (movimentacao) => {
    return dispatch => {
        axios.delete(`${URLMovimentacao}/${movimentacao.id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: "MOVIMENTACAO_CLEAR" }, search()]
}