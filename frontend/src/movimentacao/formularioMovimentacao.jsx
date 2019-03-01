import React from 'react'

import IconButton from '../utils/iconButton'
import SelectFuncionario from '../funcionario/selectFuncionario'


export default props => {
    return (
        <div role='form' className='row todoForm'>

            <div className={props.styleInputDescricao}>
                <input id="descricao" className='form-control'
                    placeholder='Digite a descricão'
                    onChange={(e) => props.handleChange('descricao', e.target.value)}
                    value={props.descricao} required={false}>
                </input>
            </div>

            <div className={props.styleInputValor}>
                <input id="dinheiroComZero" className='form-control'
                    placeholder='Digite o valor R$'
                    onChange={(e) => props.handleChange('valor', e.target.value)}
                    value={props.valor} onBlur={props.handleBlur} >
                </input>


            </div>

            <SelectFuncionario data={props.data} handleChangeFuncionário={props.handleChangeFuncionário}/>

            <div className={props.styleButton}>
                <IconButton style='primary' onClick={props.handleAdd} icon='plus' />
                <IconButton style='info' onClick={props.handleSearch} icon='search' />
                <IconButton style='dark' onClick={props.handleClear} icon='close' />
            </div>

        </div>
    )
} 