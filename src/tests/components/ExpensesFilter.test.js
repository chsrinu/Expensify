import React from 'react';
import {shallow } from 'enzyme';
import {ExpensesFilter} from '../../components/ExpensesFilter';
import {filter,altFilter} from '../fixtures/filters'

let setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate, wrapper;
beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    wrapper = shallow(<ExpensesFilter 
        filter = {filter}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        setTextFilter = {setTextFilter}
        sortByAmount ={sortByAmount}
        sortByDate = {sortByDate}
        />)
})

test('ExpensesFilter default case',() => {
   expect(wrapper).toMatchSnapshot();
})

test('ExpensesFilter with some valid data', () => {
    wrapper.setProps({filter:altFilter})
    expect(wrapper).toMatchSnapshot();
})

test('Expensesfilter handling textChanges', () => {
    wrapper.find('input').simulate('change',{target:{value:'current'}});
    expect(setTextFilter).toHaveBeenLastCalledWith('current');
})

test('Expensesfilter sorting by Date', () => {
    wrapper.find('select').simulate('change',{target:{value:'date'}});
    expect(sortByDate).toHaveBeenCalled();
})

test('Expensesfilter sorting by amount', () => {
    wrapper.find('select').simulate('change',{target:{value:'amount'}});
    expect(sortByAmount).toHaveBeenCalled();
})

test('Expensesfilter handling date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate:altFilter.startDate, endDate:altFilter.endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(altFilter.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilter.endDate);
})

test('ExpensesFilter handling focusChange on DateRangePicker',() => {
    wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
    expect(wrapper.state('focused')).toBe('startDate');
})