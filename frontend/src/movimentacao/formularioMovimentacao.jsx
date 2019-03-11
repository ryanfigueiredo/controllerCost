import React, { Component } from 'react'
import { connect } from 'react-redux'
import IconButton from '../utils/iconButton'
import SelectFuncionario from '../funcionario/selectFuncionario'
import { bindActionCreators } from 'redux'
import { changeDescricaoMovimentacao, changeValorMovimentacao, search, add, clear } from './movimentacaoActions'


class FormularioMovimentacao extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, search, descricao, valor } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search(descricao) : add(descricao, valor)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, descricao, valor, funcionarioId } = this.props
        return (
            <div role='form' className='row todoForm'>

                <div className={this.props.styleInputDescricao}>
                    <input id="descricao" className='form-control'
                        placeholder='Digite a descricão'
                        onChange={this.props.changeDescricaoMovimentacao}
                        value={this.props.descricao}
                        onKeyUp={this.keyHandler}
                    >
                    </input>
                </div>

                <div className={this.props.styleInputValor}>
                    <input id="dinheiroComZero" className='form-control'
                        placeholder='Digite o valor R$'
                        onChange={this.props.changeValorMovimentacao}
                        value={this.props.valor} onBlur={this.props.handleBlur}
                        onKeyUp={this.keyHandler}
                    >
                    </input>


                </div>


                <SelectFuncionario value={this.props.funcionarioId} />

                <div className={this.props.styleButton}>
                    <IconButton style='primary' onClick={() => add(descricao, valor, funcionarioId)} icon='plus' />
                    <IconButton style='info' onClick={() => search(descricao)} icon='search' />
                    <IconButton style='dark' onClick={this.props.clear} icon='close' />
                </div>

            </div>
        )
    }

}

const mapStateToProps = state => ({ descricao: state.movimentacao.descricao, valor: state.movimentacao.valor })
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ changeDescricaoMovimentacao, changeValorMovimentacao, search, add, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormularioMovimentacao)