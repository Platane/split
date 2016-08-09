import React, {PropTypes, Component}    from 'react'

import ExpenseAdd      from './expenseAdd'

import {user}           from 'fragment/user'

class ExpenseAddState extends Component {

    static contextTypes = {
        getValue      : PropTypes.func.isRequired,
    };

    constructor(){
        super()
        this.state = {
            expense : {
                amount  : 10,
                // date    : Date.now(),
                date    : 0,
                from    : null,
                to      : [],

            }
        }
    }

    onChange( props ){
        this.setState({ expense: { ...this.state.expense, ...props } })
    }

    componentDidMount(){
        this.setState({ })
    }

    render(){
        return <ExpenseAdd { ...this.state } { ...this.props } onChange={ x => this.onChange( x ) }/>
    }
}

export default ExpenseAddState
