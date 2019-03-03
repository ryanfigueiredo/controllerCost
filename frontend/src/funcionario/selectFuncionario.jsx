import React from 'react'

export default props => (
    <div className="col-xs-12 col-sm-3 col-md-3">
        <select id="selectFuncionario" className="form-control"
            onChange={props.handleChangeFuncionário}>
            {props.data.map(funcionario => <option key={funcionario.id}
                value={funcionario.id}>{funcionario.nomeFuncionario}</option>)}
        </select>
    </div>
)
