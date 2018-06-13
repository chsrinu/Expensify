import React from 'react';
import ExpenseForm from './ExpenseForm';
import {AddExpense} from '../actions/expenses';
import { connect } from 'react-redux';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <h2>Add Expense </h2>
            <ExpenseForm 
                onSubmit = {this.onSubmit} />
            </div> 
        )
    }
}
const mapDispatchToProps = (dispatch) => (
    {
        onSubmit: (expense) => dispatch(AddExpense(expense))
    }
)

export default connect(undefined, mapDispatchToProps)(AddExpensePage);