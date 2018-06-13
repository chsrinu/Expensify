import {filtersReducer} from '../../reducers/filters';
import moment from 'moment';

test('FiltersReducer default testCase',() => {
    const state = filtersReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('setTextFilter inside filtersReducer testCase',() => {
    let action = {
        type:'SET_TEXT_FILTER',
        text: 'testing'
    }
    const state = filtersReducer(undefined,action)
    expect(state.text).toBe('testing');
});

test('sortByDate inside filtersReducer testCase',() => {
    let action = {
        type:'SORT_BY_DATE',
        sortBy: 'date'
    }
    let state = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate: undefined
    }
    const result_state = filtersReducer(state,action)
    expect(result_state.sortBy).toBe('date');
});

test('sortByAmount inside filtersReducer testCase',() => {
    let action = {
        type:'SORT_BY_AMOUNT',
        sortBy: 'amount'
    }
    const result_state = filtersReducer(undefined,action)
    expect(result_state.sortBy).toBe('amount');
});

test('setStartDate inside filtersReducer testCase',() => {
    const startDate = moment()
    let action = {
        type:'SET_START_DATE',
        startDate: startDate
    }
    const result_state = filtersReducer(undefined,action)
    expect(result_state.startDate).toEqual(startDate);
});
test('setEndDate inside filtersReducer testCase',() => {
    const endDate = moment()
    let action = {
        type:'SET_END_DATE',
        endDate:endDate
    }
    const result_state = filtersReducer(undefined,action)
    expect(result_state.endDate).toEqual(endDate);
});
