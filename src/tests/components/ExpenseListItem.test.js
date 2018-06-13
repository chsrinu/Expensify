import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('ExpenseListItem testCase', () => {
    const wrapper = shallow(<ExpenseListItem item = {expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
});