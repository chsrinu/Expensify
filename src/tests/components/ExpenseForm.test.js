import React from 'react';
import {shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment';

test('ExpenseForm default testCase', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('ExpenseForm testCase with Expense', () => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
})

test('DescriptionChange Listner, userInteraction testCase',() => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]}/>);
    wrapper.find('input').at(0).simulate('change',{ target:{value:expenses[1].description}});
    expect(wrapper.state('description')).toBe(expenses[1].description);
   // expect(wrapper).toMatchSnapshot();
})

test('Note Change listner, userInteraction testCase',() => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]}/>);
    wrapper.find('textarea').simulate('change',{target:{value:expenses[1].note}});
    expect(wrapper.state('note')).toBe(expenses[1].note);
    //expect(wrapper).toMatchSnapshot();
})

test('Amount Change listner, userInteraction testCase',() => {
    const value = '22.22'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{target:{value}});
    expect(wrapper.state('amount')).toBe(value);
    //expect(wrapper).toMatchSnapshot();
})
test('Amount Change listner with incorrect value, userInteraction testCase',() => {
    const value = '22.225'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{target:{value}});
    expect(wrapper.state('amount')).toBe('');
    //expect(wrapper).toMatchSnapshot();
})

test('Form submission adding onSubmit using spy, userInteraction testCase',() => {
    const testExpense = {
    description:'Microsoft',
    note:'OS company',
    amount: 10 ,
    createdAt:moment(0).subtract(4,'days').valueOf(),
    }
    const spyFunction = jest.fn();
    const wrapper = shallow(<ExpenseForm expense = {testExpense} onSubmit = {spyFunction} />);
    wrapper.find('form').simulate('submit',{ preventDefault: () => {} });
    expect(spyFunction).toHaveBeenLastCalledWith(testExpense);
   // expect(wrapper).toMatchSnapshot();
})

test('SingleDatePicker dateChangeListner,ExpenseForm', () => {
    let momentTimeStamp = moment(0);
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(momentTimeStamp);
    expect(wrapper.state('createdAt')).toEqual(momentTimeStamp)
})

test('SingleDatePicker focusChangeListner,ExpenseForm', () => {
    //let flag = true;
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true});
    expect(wrapper.state('calendarFocus')).toBe(true)
})