import React from 'react';
import { BrowserRouter , Route, Link, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import ErrorPage from '../components/ErrorPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path ='/' component={ExpenseDashBoardPage} exact />
                <Route path = '/create' component={AddExpensePage} />
                <Route path ='/edit/:id' component={EditExpensePage} />
                <Route path = '/help' component={HelpPage} />
                <Route component = {ErrorPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;