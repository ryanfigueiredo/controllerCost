import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../utils/pageHeader'
import FormularioMovimentacao from './formularioMovimentacao'
import ListaMovimentacao from './listaMovimentacao'
import { URLFuncionario, URLMovimentacao, movimentacoes } from '../utils/URLS'

export default class Funcionario extends Component {
    constructor(props) {
        super(props)
        this.state = { descricao: '', valor: '', funcionarioId: '', funcionarios: [] }

        this.handleBlur = this.handleBlur.bind(this);
        this.handleChangeFuncionário = this.handleChangeFuncionário.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
    }

    refresh(descricao = '') {
        const search = descricao ? `/searchByDescription/${descricao}` : ""
        axios.get(`${URLMovimentacao}${search}`)
            .then(resp => this.setState({ ...this.state, descricao, valor: '', list: resp.data }))
    }

    // evento para buscar pelo funcionario no selectFuncionario
    handleChangeFuncionário(e) {
        const funcionarioId = e.target.value
        axios.get(`${URLMovimentacao}/searchByFuncionarioID/${funcionarioId}`)
            .then(resp => this.setState({ list: resp.data }))
    }

    handleSearch() {
        this.refresh(this.state.descricao)
        //const descricaoId = document.getElementById("descricao").value
        //console.log(this.state.movimentacoes)
        //const NovoArray = this.state.movimentacoes.filter()
    }

    handleClear() {
        this.refresh()
    }

    handleChange(state, value) {
        this.setState({ [state]: value })
    }

    componentDidMount() {
        axios.get(`${URLFuncionario}`)
            .then(resp =>
                this.setState({ ...this.state, funcionarios: resp.data }))
    }

    handleAdd() {
        const select = document.getElementById("selectFuncionario")
        const funcionarioId = select.options[select.selectedIndex].value
        const descricao = this.state.descricao
        const valor = this.state.valor
        axios.post(URLMovimentacao, { descricao, valor, funcionarioId })
            .then(resp => this.refresh())
    }

    handleRemove(movimentacao) {
        axios.delete(`${URLMovimentacao}/${movimentacao.id}`)
            .then(resp => this.refresh(this.state.descricao))
    }

    handleBlur(e) {
        const valor = parseFloat(this.state.valor);
        const cleanNum = valor.toFixed(2);
        this.setState({ valor: cleanNum });
    }

    render() {
        return (
            <div>
                <PageHeader name='Movimentacões' />
                <FormularioMovimentacao
                    handleChangeFuncionário={this.handleChangeFuncionário}
                    handleClear={this.handleClear}
                    descricao={this.state.descricao}
                    valor={this.state.valor}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    data={this.state.funcionarios}
                    handleBlur={this.handleBlur}
                    isDepartamento={true}
                    styleInputDescricao='col-xs-12 col-sm-5 col-md-5'
                    styleInputValor='col-xs-12 col-sm-2 col-md-2'
                    styleButton='col-xs-12 col-sm-2 col-md-2' />

                <ListaMovimentacao list={this.state.list}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}
