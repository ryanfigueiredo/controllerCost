import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from '../departamento/departamentoActions'


class SelectDepartamento extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        const list = this.props.list || []
        return (
            <div className="col-xs-12 col-sm-4 col-md-3">
                <select id="selectDepartamento" className="form-control">
                    {list.map(departamento => <option key={departamento.id}
                        value={departamento.id}>{departamento.nomeDepartamento}</option>)}
                </select>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.departamento.list })
const mapDispatchToProps = (dispatch) => bindActionCreators({ search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SelectDepartamento)
