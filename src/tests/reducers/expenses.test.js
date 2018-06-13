import {expensesReducer} from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import moment from 'moment';

test('expenseReducer with default values',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([])
})

test('removeExpense testCase in expenseReducer', () => {
    let action = {
        type:'REMOVE_EXPENSE',
        id:1
    }
    const result_state = expensesReducer(expenses,action)
    expect(result_state).toEqual([expenses[0],expenses[2]])
})

test('editExpense testCase in expenseReducer', () => {
    let action = {
        type:'EDIT_EXPENSE',
        id:1,
        updates:{amount:20}
    }
    const result_state = expensesReducer(expenses,action)
    expect(result_state[1].amount).toBe(20)
})

test('editExpense testCase with unknown Id in expenseReducer', () => {
    let action = {
        type:'EDIT_EXPENSE',
        id:3,
        updates:{amount:20}
    }
    const result_state = expensesReducer(expenses,action)
    expect(result_state).toEqual(expenses)
})

test('AddExpense testCase in expenseReducer', () => {
    let expense={
        id:0,
        description:'Google',
        note:'AI first company',
        amount: 10000 ,
        createdAt:moment(0).valueOf(),
    }
    let action = {
        type:'EXPENSE',
        expense: expense
        
    }
    const result_state = expensesReducer(expenses,action)
    expect(result_state).toEqual([...expenses,expense])
})
