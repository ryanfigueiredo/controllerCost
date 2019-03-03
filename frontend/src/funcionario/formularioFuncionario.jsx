import React, { Component } from 'react'
import IconButton from '../utils/iconButton'
import SelectDepartamento from '../departamento/selectDepartamento'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeNomeFuncionario, search, add, clear } from './funcionarioActions'


class FormularioFuncionario extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)

    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, search, nomeFuncionario } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search(nomeFuncionario) : add(nomeFuncionario)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, nomeFuncionario, departamentoId, } = this.props
        return (
            <div role='form' className='row todoForm'>

                <div className={this.props.styleInput}>
                    <input id="description" className='form-control'
                        placeholder='Digite o nome'
                        onChange={this.props.changeNomeFuncionario}
                        value={this.props.nomeFuncionario}
                        onKeyUp={this.keyHandler}
                    >
                    </input>
                </div>

                <SelectDepartamento value={this.props.departamentoId} />

                <div className={this.props.styleButton}>
                    <IconButton style='primary' onClick={() => add(nomeFuncionario, departamentoId)} icon='plus' />
                    <IconButton style='info' onClick={() => search(nomeFuncionario)} icon='search' />
                    <IconButton style='dark' onClick={this.props.clear} icon='close' />
                </div>

            </div>
        )
    }

}

const mapStateToProps = state =>
    ({ nomeFuncionario: state.funcionario.nomeFuncionario, list: state.funcionario.list })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeNomeFuncionario, search, add, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormularioFuncionario)