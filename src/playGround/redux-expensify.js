import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const AddExpense = ({
    description = 'testDescription',
    note = 'testNote',
    amount = 1,
    createdAt = 0
    } = {}
) => (
        {
            type: 'EXPENSE',
            expense : {
                id: uuid(),
                description: description,
                note: note,
                amount: amount,
                createdAt: createdAt
            }
        }
    )
const editExpense = (id,updates) => (
    {
        type:'EDIT_EXPENSE',
        id:id,
        updates:updates
    }
)
const removeExpense = ({id}) => (
    {
        type: 'DELETE_EXPENSE',
        id: id
    }
)
const AddFilter = ({
    text = 'test',
    sortBy = 'date',
    startDate = undefined,
    endDate = undefined } = {}
) => (
        {
            type:'FILTER',
            filter:{
                text:text,
                sortBy:sortBy,
                startDate: startDate,
                endDate: endDate
            }
        }
    )
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text:   text
});
const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT',
})
const sortByDate = () => ({
    type:'SORT_BY_DATE',
})
const setStartDate = (date) => ({
    type:'SET_START_DATE',
    date:date
})
const setEndDate = (date = undefined ) => ({
    type:'SET_END_DATE',
    date:date
})

const expensesReducer = (state=[],action) => {
    switch(action.type){
        case 'EXPENSE':
            return [...state,action.expense];
        case 'DELETE_EXPENSE':
           // console.log('deleting expense',action.id);
            return (state.filter((item)=>{
                if(item.id!=action.id)
                    return item;
            }))
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id==action.id)
                    return {...expense,...action.updates}
                return expense;
            })
        default:
        return state;
    }
}
const FILTERS_INITIAL_STATE = {
    text:'',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = FILTERS_INITIAL_STATE,action) => {
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
            return {...state,startDate:action.date}
        case 'SET_END_DATE':
            return {...state,endDate:action.date}
        default:
            return state;
    }
}

const reducers = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
})

const store = createStore(reducers);
store.subscribe(()=>{
    //console.log(store.getState());
    let state = store.getState();
    const {expenses,filters} = state
    //console.log(expenses,filters);
    console.log(visibilitySettings(expenses,filters));
})
const visibilitySettings = (expenses,{text, sortBy, startDate, endDate}) => (
    expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number'|| expense.createdAt>=startDate
        const endDateMatch = typeof endDate !== 'number'|| expense.createdAt<=endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy == 'date')
            return a.createdAt < b.createdAt ? 1 :-1
        else if(sortBy == 'amount')
            return a.amount < b.amount ? 1:-1
    })
       
);

 const expense1 = store.dispatch(AddExpense({description:'rent',amount:20000, createdAt:-100}));
 const expense2 = store.dispatch(AddExpense({description:'movie',amount:10000, createdAt:-10}));
// store.dispatch(AddFilter({text:'Budget filter', sortBy:'money'}));
// store.dispatch(editExpense(expense1.expense.id,{description:'movie'}));
// //console.log(expense1);
// store.dispatch(removeExpense({id:expense1.expense.id}))
// store.dispatch(setTextFilter('debts'));
 store.dispatch(sortByAmount());
 //store.dispatch(sortByDate());
 //store.dispatch(setStartDate(123));
 //store.dispatch(setStartDate());
 //store.dispatch(setTextFilter('re'))
 //store.dispatch(setEndDate(1230));


