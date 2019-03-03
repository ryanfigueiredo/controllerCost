import React from 'react'

import PageHeader from '../utils/pageHeader'
import FormularioDepartamento from './formularioDepartamento'
import ListaDepartamento from './listaDepartamento'

export default props => (
    <div>
        <PageHeader name='Departamento' />
        <FormularioDepartamento
            styleInput='col-xs-12 col-sm-9 col-md-10'
            styleButton='col-xs-12 col-sm-3 col-md-2' />
        <ListaDepartamento />
    </div>
)
