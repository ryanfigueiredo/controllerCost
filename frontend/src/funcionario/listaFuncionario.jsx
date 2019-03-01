import React from 'react'
import IconButton from '../utils/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(funcionario =>(
            <tr key={funcionario.id}>
                <td>{funcionario.nome}</td>
                <td>
                    {funcionario.Departamento.nome}
                </td>

                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(funcionario)}/>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Departamento</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}