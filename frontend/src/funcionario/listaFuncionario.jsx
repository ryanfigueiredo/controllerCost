import React from 'react'
import IconButton from '../utils/iconButton'
import { connect } from 'react-redux'
import { remove } from './funcionarioActions'
import { bindActionCreators } from 'redux'

const ListaFuncionario = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(funcionario => (
            <tr key={funcionario.id}>
                <td>{funcionario.nomeFuncionario}</td>
                <td>
                    {funcionario.Departamento.nomeDepartamento}
                </td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.remove(funcionario)} />
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

const mapStateToProps = state =>
    ({ list: state.funcionario.list })
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ remove }, dispatch)
export default connect(mapStateToProps,
    mapDispatchToProps)(ListaFuncionario)