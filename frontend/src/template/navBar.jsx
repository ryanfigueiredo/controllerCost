import React from 'react'


import Li from '../utils/li'

export default props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <Li title='Home' to='#/home' />
        <Li title='Departamento' to='#/departamento' />
        <Li title='Funcionário' to='#/funcionario' />
        <Li title='Movimentacao' to='#/movimentacao' />
      </ul>
    </div>
  </nav>
)
