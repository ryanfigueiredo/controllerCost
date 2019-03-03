import axios from 'axios'
import { URLDepartamento} from '../utils/URLS'

export const changeNomeDepartamento = (event) => ({
    type: "NOME_CHANGED",
    payload: event.target.value
})

export const search = (nomeDepartamento) => {
    const search = nomeDepartamento ? `/searchByName/${nomeDepartamento}` : ""
    const request = axios.get(`${URLDepartamento}${search}`)
    return {
        type: "DEPARTAMENTO_SEARCHED",
        payload: request
    }
}

export const add = (nomeDepartamento) => {
    return dispatch => {
        axios.post(URLDepartamento, { nomeDepartamento })
            .then(resp => dispatch(clear()))
    }
}

export const remove = (departamento) => {
    return dispatch => {
        axios.delete(`${URLDepartamento}/${departamento.id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: "DEPARTAMENTO_CLEAR" }, search()]
}
