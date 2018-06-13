import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='test' exact >Dashboard</NavLink>
        <NavLink to='/create' activeClassName='test'>Create Expense </NavLink>
        <NavLink to='/help' activeClassName='test'>Help </NavLink>
    </div>
);
export default Header;