import React from 'react'

export default props => (
    <li className="nav-item active">
         <a className="nav-link" href={props.to}>{props.title}</a>
    </li>
)