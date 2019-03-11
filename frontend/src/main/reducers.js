import { combineReducers } from 'redux'
import departamentoReducer from '../departamento/departamentoReducer'
import funcionarioReducer from '../funcionario/funcionarioReducer'
import movimentacaoReducer from '../movimentacao/movimentacaoReducer';

const rootReducer = combineReducers({
    departamento: departamentoReducer,
    funcionario: funcionarioReducer,
    movimentacao: movimentacaoReducer
})

export default rootReducer