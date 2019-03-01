import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../utils/pageHeader'
import ListaFuncionario from './listaFuncionario'
import FormularioFuncionario from './formularioFuncionario';
import {URLFuncionario, URLDepartamento} from '../utils/URLS'

export default class Funcionario extends Component {
    constructor(props){
        super(props)
        this.state = { nome: '' , departamentoId: '', departamentos: []}


        this.handleRemove = this.handleRemove.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
    }

    refresh(){ 
        axios.get(`${URLFuncionario}s`)
            .then(resp => this.setState({...this.state, nome: '', list: resp.data}))
    }

    handleChange(e){
        this.setState({...this.state, nome: e.target.value})
    }

    handleAdd(){
        const select = document.getElementById("selectDepartamento")
        const departamentoId = select.options[select.selectedIndex].value
        const nome = this.state.nome
        axios.post(URLFuncionario, { nome, departamentoId })
            .then(resp => this.refresh())
    }

    handleRemove(funcionario){
        axios.delete(`${URLFuncionario}/${funcionario.id}`)
            .then(resp => this.refresh())
    }
    
    componentDidMount(){
        axios.get(`${URLDepartamento}`)
            .then(resp => 
                this.setState({...this.state, departamentos:resp.data}))
    }

    render(){
        return(
            <div>
                <PageHeader name="Funcionários" />
                <FormularioFuncionario nome={this.state.nome}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    styleInput='col-xs-12 col-sm-5 col-md-6' 
                    styleButton='col-xs-12 col-sm-3 col-md-3'
                    isFuncionario={true} data={this.state.departamentos}/>
                <ListaFuncionario list={this.state.list}
                    handleRemove={this.handleRemove}/>
            </div>
        )
    }
}