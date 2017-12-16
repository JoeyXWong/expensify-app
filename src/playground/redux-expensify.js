<<<<<<< HEAD
import { createStore, combineReducers } from 'redux';
=======
import {createStore, combineReducers} from 'redux';
>>>>>>> d017521d2996557405da633e15d9f8773900c4ad
import uuid from 'uuid';

//ADD_EXPENSE

<<<<<<< HEAD
const addExpense = (
    { description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
    }={}
    ) => ({
    type: 'ADD_EXPENSE',
    expense:{
=======
const addExpense = ({
                        description = '',
                        note = '',
                        amount = 0,
                        createdAt = 0
                    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
>>>>>>> d017521d2996557405da633e15d9f8773900c4ad
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
<<<<<<< HEAD

//REMOVE_EXPENSE
=======
//REMOVE_EXPENSE

const removeExpense = ({
                           id
                       }) => ({
    type: 'REMOVE_EXPENSE',
    id
});
>>>>>>> d017521d2996557405da633e15d9f8773900c4ad
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE


//expenses reducer

const expensesReducerDefaultState = [];

<<<<<<< HEAD
const expensesReducer = (state= expensesReducerDefaultState, action) => {
    switch (action.type) {
=======
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]; //Same effect as below code, does not mutate state
        //return state.concat(action.expense); //concat does not mutate array
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id); //destructured id from expense object

>>>>>>> d017521d2996557405da633e15d9f8773900c4ad
        default:
            return state;
    }
};

//Filters reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

<<<<<<< HEAD
const filtersReducer = (state= filtersReducerDefaultState, action) => {
=======
const filtersReducer = (state = filtersReducerDefaultState, action) => {
>>>>>>> d017521d2996557405da633e15d9f8773900c4ad
    switch (action.type) {
        default:
            return state
    }
};

//store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

<<<<<<< HEAD
console.log(store.getState());
=======
store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 200}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));
>>>>>>> d017521d2996557405da633e15d9f8773900c4ad

const demoState = {
    expense: [{
        id: 'tdsgdfhdfshsdh',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

