import React from 'react';
import {connect} from 'react-redux'; 
import ExpenseListItem from './ExpenseListItem'
import ExpensesFilter from './ExpensesFilter'
import {visibilitySettings} from '../selectors/expenses.js'

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <ExpensesFilter />
        {
            props.list.length > 0 ?
            (props.list.map((item)=><ExpenseListItem item={item} key={item.id} />))
            :
            (<p>No expenses To show</p>)
        }
    </div>
)
const mapStateToProps = (state) => (
    {
        list:visibilitySettings(state.expenses,state.filters)
    }
)
export default connect(mapStateToProps)(ExpenseList)