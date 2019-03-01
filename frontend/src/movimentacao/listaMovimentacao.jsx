import React from 'react'
import IconButton from '../utils/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(movimentacao => (
            <tr key={movimentacao.id}>
                <td>{movimentacao.descricao}</td>
                <td>
                    {movimentacao.Funcionario.nome}
                </td>
                <td>
                    R$ {movimentacao.valor}
                </td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(movimentacao)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Funcionário</th>
                    <th>Valor</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}