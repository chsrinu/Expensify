import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';//import needed in ExpenseForm.js
import configureStore from './store/configureStore';
import {AddExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import {visibilitySettings} from './selectors/expenses';

const store = configureStore();
store.subscribe(()=>{
    //console.log(store.getState());
    const {expenses,filters} = store.getState();
    console.log(visibilitySettings(expenses, filters));
})

const Root = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
const expense1 = store.dispatch(AddExpense({description:'Water bill',amount:20000, createdAt:4000}));
const expense2 = store.dispatch(AddExpense({description:'Gas bill',amount:10000, createdAt:1000}));
const expense3 = store.dispatch(AddExpense({description:'Current bill',amount:15000, createdAt:10000}));
//store.dispatch(setTextFilter('water'));

ReactDOM.render(Root, document.getElementById('container'));
