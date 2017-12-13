import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddDashboardPage from '../components/AddDashboardPage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import Header from '../components/Header.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';


//switch statement used to handle 404, cannot have div inside.
const AppRouter= (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>  
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddDashboardPage} /> 
<<<<<<< HEAD
        <Route path="/edit/:id" component={EditExpensePage} />
=======
        <Route path="/edit" component={EditExpensePage} />
>>>>>>> 539900e701bd47232c553199b4cd4d24591f5b05
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} /> 
    </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;