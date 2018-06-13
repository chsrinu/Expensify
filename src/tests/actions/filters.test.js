import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('setStartdate testCase', () => {
    const result = setStartDate(moment(1234));
    expect(result).toEqual({
        type:'SET_START_DATE',
        startDate:moment(1234)
    })
})

test('setEndDate testCase', () => {
    const result = setEndDate(moment(1234));
    expect(result).toEqual({
        type:'SET_END_DATE',
        endDate:moment(1234)
    })
})

test('sortByDate testCase', () => {
    const result = sortByDate();
    expect(result).toEqual({
        type:'SORT_BY_DATE'
    })
})

test('sortByAmount testCase', () => {
    const result = sortByAmount();
    expect(result).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})

test('setTextFilter testCase', () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('setTextFilter testCase', () => {
    const result = setTextFilter('Water bill');
    expect(result).toEqual({
        type:'SET_TEXT_FILTER',
        text:'Water bill'
    })
})