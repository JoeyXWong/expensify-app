import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
<<<<<<< HEAD
=======
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
>>>>>>> 539900e701bd47232c553199b4cd4d24591f5b05
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;