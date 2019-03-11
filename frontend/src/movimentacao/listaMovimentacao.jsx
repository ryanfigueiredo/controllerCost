import React from 'react'
import IconButton from '../utils/iconButton'
import { connect } from 'react-redux'
import { remove } from './movimentacaoActions'
import { bindActionCreators } from 'redux'

const ListaMovimentacao = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(movimentacao => (
            <tr key={movimentacao.id}>
                <td>{movimentacao.descricao}</td>
                <td>
                    {movimentacao.Funcionario.nomeFuncionario}
                </td>
                <td>
                    R$ {movimentacao.valor}
                </td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.remove(movimentacao)} />
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

const mapStateToProps = state =>
    ({ list: state.movimentacao.list })
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ remove }, dispatch)
export default connect(mapStateToProps,
    mapDispatchToProps)(ListaMovimentacao)