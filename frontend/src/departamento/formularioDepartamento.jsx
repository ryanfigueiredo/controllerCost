import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import IconButton from '../utils/iconButton'


import { changeNomeDepartamento, search, add, clear } from './departamentoActions'


class Formulario extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    
    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, search, nomeDepartamento } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search(nomeDepartamento) : add(nomeDepartamento)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, nomeDepartamento } = this.props
        return (
            <div role='form' className='row todoForm'>
                <div className={this.props.styleInput}>
                    <input id="nomeDepartamento" className='form-control'
                        placeholder='Digite o nome'
                        onChange={this.props.changeNomeDepartamento}
                        value={this.props.nomeDepartamento}
                        onKeyUp={this.keyHandler}>
                    </input>
                </div>

                <div className={this.props.styleButton}>
                    <IconButton style='primary' onClick={() => add(nomeDepartamento)} icon='plus' />
                    <IconButton style='info' onClick={() => search(nomeDepartamento)} icon='search' />
                    <IconButton style='dark' onClick={this.props.clear} icon='close' />
                </div>

            </div>
        )
    }
}


const mapStateToProps = state => ({ nomeDepartamento: state.departamento.nomeDepartamento })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeNomeDepartamento, search, add, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Formulario)
