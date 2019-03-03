import React from 'react'
import {connect} from 'react-redux'
import IconButton from '../utils/iconButton'
import {bindActionCreators} from 'redux'
import {remove} from './departamentoActions'
const ListaDepartamento = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(departamento =>(
            <tr key={departamento.id}>
                <td>{departamento.nomeDepartamento}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.remove(departamento)}/>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.departamento.list})
const mapDispatchToProps = (dispatch) => bindActionCreators({remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ListaDepartamento)