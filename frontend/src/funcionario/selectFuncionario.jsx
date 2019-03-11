import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from '../funcionario/funcionarioActions'


class SelectFuncionario extends Component {
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
                <select id="selectFuncionario" className="form-control">
                    {list.map(funcionario => <option key={funcionario.id}
                        value={funcionario.id}>{funcionario.nomeFuncionario}</option>)}
                </select>
            </div>
        )
    }

}

const mapStateToProps = state => ({ list: state.funcionario.list })
const mapDispatchToProps = (dispatch) => bindActionCreators({ search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SelectFuncionario)