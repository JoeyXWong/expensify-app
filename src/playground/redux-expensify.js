import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE

const addExpense = ({
                        description = '',
                        note = '',
                        amount = 0,
                        createdAt = 0
                    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//REMOVE_EXPENSE

const removeExpense = ({
                           id
                       }) => ({
    type: 'REMOVE_EXPENSE',
    id
});
//EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
//SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE


//expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]; //Same effect as below code, does not mutate state
        //return state.concat(action.expense); //concat does not mutate array
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id); //destructured id from expense object
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    } 
                } else {
                    return expense;
                }
            });
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

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
           
                return {
                    ...state,
                    text: action.text
                };
                
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

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 200}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));

store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

console.log('FILTER-----------')
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

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

const user = {
    name: 'Jen',
    age: 24
};

//declaring values after the spread operator means it gets overridden but doesnt mutate the 
//original object.
console.log({
    ...user,
    age: 27,
    location: 'Philadelphia'
});

console.log(user);