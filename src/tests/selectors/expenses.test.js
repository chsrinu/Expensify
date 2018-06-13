import {visibilitySettings} from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('visibilitySetting testCase with Text as filter', () => {
    const filters = {
        text:'M',
        sortBy:'',
        startDate:undefined,
        endDate:undefined
    } 
    const result = visibilitySettings(expenses,filters)
    expect(result).toEqual([expenses[1]]);
})

test('visibilitySetting testCase with sortBy date as filter', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    } 
    const result = visibilitySettings(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
})

test('visibilitySetting testCase with sortBy amount as filter', () => {
    const filters = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    } 
    const result = visibilitySettings(expenses,filters)
    expect(result).toEqual([expenses[0],expenses[2],expenses[1]]);
})

test('visibilitySetting testCase with endDate as filter', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    } 
    const result = visibilitySettings(expenses,filters)
    expect(result).toEqual([expenses[0],expenses[1]]);
})

test('visibilitySetting testCase with startDate as filter', () => {
    const filters = {
        text:'',
        sortBy:'amount',
        startDate:moment(0),
        endDate:undefined
    } 
    const result = visibilitySettings(expenses,filters)
    expect(result).toEqual([expenses[0],expenses[2]]);
})
