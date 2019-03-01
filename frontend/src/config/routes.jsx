import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Home from '../template/home'
import Departamento from '../departamento/departamento'
import Funcionario from '../funcionario/funcionario'
import Movimentacao from '../movimentacao/movimentacao'

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home} />
        <Route path='/departamento' component={Departamento} />
        <Route path='/funcionario' component={Funcionario} />
        <Route path='/movimentacao' component={Movimentacao} />
        <Redirect from='*' to='/home' />
    </Router>
)