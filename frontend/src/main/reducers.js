import { combineReducers } from 'redux'
import departamentoReducer from '../departamento/departamentoReducer'
import funcionarioReducer from '../funcionario/funcionarioReducer'

const rootReducer = combineReducers({
    departamento: departamentoReducer,
    funcionario: funcionarioReducer
})

export default rootReducer