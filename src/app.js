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

const Root = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(Root, document.getElementById('container'));
