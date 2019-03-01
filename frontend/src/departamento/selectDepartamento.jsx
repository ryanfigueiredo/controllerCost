import React from 'react'

export default props => (
    <div className="col-xs-12 col-sm-4 col-md-3">
        <select id="selectDepartamento" className="form-control">
            {props.data.map(departamento =><option key={departamento.id} 
            value={departamento.id}>{departamento.nome}</option>)}
        </select>
    </div>
)

