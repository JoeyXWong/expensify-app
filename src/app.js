import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js'
import configureStore from './stores/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter, sortByAmount} from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

console.log(store.getState());

store.dispatch(addExpense({description: 'Water bill', amount: 4500 , createdAt: 1}));
store.dispatch(addExpense({description: 'Gas Bill', amount:100, createdAt: 10}));
store.dispatch(addExpense({description: 'Rent', amount: 100500, createdAt: 10000}));
console.log(store.getState());
console.log('-----Filtering now---------');
console.log(store.getState());
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
