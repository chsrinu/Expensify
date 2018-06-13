import React from 'react';
import {shallow } from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses'

test('AddExpensePage testCase',() => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn()}
    const wrapper = shallow(<AddExpensePage onSubmit = {onSubmit} history = {history} />)
    expect(wrapper).toMatchSnapshot();
})


test('AddExpensePage with onSubmit spy testCase',() => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn()}
    const wrapper = shallow(<AddExpensePage onSubmit = {onSubmit} history = {history} />)
    
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
})