import React from 'react'

import PageHeader from '../utils/pageHeader'
import ListaFuncionario from './listaFuncionario'
import FormularioFuncionario from './formularioFuncionario';

export default props => (
    <div>
        <PageHeader name="Funcionários" />
        <FormularioFuncionario
            styleInput='col-xs-12 col-sm-5 col-md-6'
            styleButton='col-xs-12 col-sm-3 col-md-3' />
        <ListaFuncionario  />
    </div>
)
