import React from 'react'

import PageHeader from '../utils/pageHeader'
import ListaMovimentacao from './listaMovimentacao'
import FormularioMovimentacao from './formularioMovimentacao'

export default props => (
    <div>
        <PageHeader name='Movimentacões' />
        <FormularioMovimentacao
            styleInputDescricao='col-xs-12 col-sm-5 col-md-5'
            styleInputValor='col-xs-12 col-sm-2 col-md-2'
            styleButton='col-xs-12 col-sm-2 col-md-2' />
        <ListaMovimentacao />
    </div>
)


