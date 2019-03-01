import {combineReducers} from 'redux'
import departamentoReducer from '../departamento/departamentoReducer'

const rootReducer = combineReducers({
    departamento: departamentoReducer
})

export default rootReducer