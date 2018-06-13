import React from 'react';
import {shallow } from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper;
beforeEach(() => {
     editExpense = jest.fn();
     removeExpense = jest.fn();
     history = { push: jest.fn()}
     wrapper = shallow(<EditExpensePage 
        expense = {expenses[1]}
        editExpense = {editExpense}
        removeExpense = {removeExpense}
        history = {history}
        />);
})
test('EditExpense Default snapshot testCase', () => {
    expect(wrapper).toMatchSnapshot()
})

test('EditExpensePage with formSubmission spy testCase', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    //expect(removeExpense).toHaveBeenLastCalledWith()
    expect(history.push).toHaveBeenLastCalledWith('/');
        
});

test('EditExpensePage with removeExpense spy testCase', () => {
    wrapper.find('button').simulate('click')
    //expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[1].id})
    expect(history.push).toHaveBeenLastCalledWith('/');
        
});