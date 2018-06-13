import moment from 'moment';

const FILTERS_INITIAL_STATE = {
    text:'',
    sortBy:'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export const filtersReducer = (state = FILTERS_INITIAL_STATE,action) => {
    switch(action.type){
        case 'FILTER': 
            return action.filter 
        case 'SET_TEXT_FILTER':
            return {...state,text:action.text}
        case 'SORT_BY_AMOUNT':
            return {...state,sortBy:'amount'}
        case 'SORT_BY_DATE':
            return {...state,sortBy:'date'}
        case 'SET_START_DATE':
            return {...state,startDate:action.startDate}
        case 'SET_END_DATE':
            return {...state,endDate:action.endDate}
        default:
            return state;
    }
}