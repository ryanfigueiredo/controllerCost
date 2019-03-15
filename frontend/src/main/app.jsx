import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../assets'

import React from 'react'
import Routes from '../config/routes'
import NavBar from '../template/navBar'

export default props => (
    <div className='container'>
        <NavBar />
        <Routes />
    </div>
)



