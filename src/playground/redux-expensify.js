import {createStore, combineReducers} from 'redux';





store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 300, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 200, createdAt: -1000}));

store.dispatch(setTextFilter('ffe'));
//
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
//
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
//
//
// console.log('FILTER-----------')
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//
// console.log('DATES-------------');
// store.dispatch(setStartDate(2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

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

