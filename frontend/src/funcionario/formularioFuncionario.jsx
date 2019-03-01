import React from 'react'
import IconButton from '../utils/iconButton'
import SelectDepartamento from '../departamento/selectDepartamento'

export default props => (
    <div role='form' className='row todoForm'>

        <div className={props.styleInput}>
            <input id="description" className='form-control'
                placeholder='Digite o nome'
                onChange={props.handleChange}
                value={props.nome}></input>
        </div>

        {props.isFuncionario &&
        <SelectDepartamento data={props.data}/>}

        <div className={props.styleButton}>
            <IconButton style='primary' onClick={props.handleAdd} icon='plus' />
            <IconButton style='info' onClick={props.handleSearch} icon='search' />
            <IconButton style='dark' onClick={props.handleClear} icon='close' />
        </div>

    </div>
)
