import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import IconButton from '../utils/iconButton'
import SelectDepartamento from './selectDepartamento'

import { changeNome, search, add, clear } from './departamentoActions'

class Formulario extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, search, nome } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search(nome) : add(nome)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, nome } = this.props
        return (
            <div role='form' className='row todoForm'>
                <div className={this.props.styleInput}>
                    <input id="nome" className='form-control'
                        placeholder='Digite o nome'
                        onChange={this.props.changeNome}
                        value={this.props.nome}
                        onKeyUp={this.keyHandler}>
                    </input>
                </div>

                {this.props.isFuncionario && <SelectDepartamento data={this.props.data}
                    handleDepartament={this.props.handleDepartament} />}



                <div className={this.props.styleButton}>
                    <IconButton style='primary' onClick={() => add(nome)} icon='plus' />
                    <IconButton style='info' onClick={() => search(nome)} icon='search' />
                    <IconButton style='dark' onClick={this.props.clear} icon='close' />
                </div>

            </div>
        )
    }
}


const mapStateToProps = state => ({ nome: state.departamento.nome })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeNome, search, add, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Formulario)
