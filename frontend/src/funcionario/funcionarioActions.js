import axios from 'axios'
import { URLFuncionario } from '../utils/URLS'

export const changeNomeFuncionario = (event) => ({
    type: 'NOME_CHANGED',
    payload: event.target.value
})

export const search = (nomeFuncionario) => {
    const search = nomeFuncionario ? `/searchByName/${nomeFuncionario}` : ""
    const request = axios.get(`${URLFuncionario}${search}`)
    return {
        type: 'FUNCIONARIO_SEARCHED',
        payload: request
    }
}

export const add = (nomeFuncionario) => {
    const select = document.getElementById("selectDepartamento")
    const departamentoId = select.options[select.selectedIndex].value
    return dispatch => {
        axios.post(URLFuncionario, { nomeFuncionario, departamentoId })
            .then(resp => dispatch(clear()))
    }

}

export const remove = (funcionario) => {
    return dispatch => {
        axios.delete(`${URLFuncionario}/${funcionario.id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: "FUNCIONARIO_CLEAR" }, search()]
}


