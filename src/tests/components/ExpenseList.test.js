import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList list = {expenses} />);
    expect(wrapper).toMatchSnapshot();
})

test('ExpenseList withOut expenses', () => {
    const wrapper = shallow(<ExpenseList list = {[]} />);
    expect(wrapper).toMatchSnapshot();
})
