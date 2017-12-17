import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js'
import configureStore from './stores/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

console.log(store.getState());

const expenseOne = store.dispatch(addExpense({description: 'Water bill'}));
const expenseTwo = store.dispatch(addExpense({description: 'Gas Bill'}));
console.log(store.getState());
console.log('-----Filtering now---------');
store.dispatch(setTextFilter('bill'));

console.log(store.getState());
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);



ReactDOM.render(<AppRouter/>, document.getElementById('app'));
