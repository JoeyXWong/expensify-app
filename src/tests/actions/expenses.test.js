//test contains babel

import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

test('Should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {

    const expense = {
        id: '123abc',
        description: 'description',
        note: 'note',
        amount: 1,
        createAt: 12345
    }

    const action = editExpense('123abc',
        {
            description: 'changed description',
            note: 'changed note',
            amount: 2, createdAt: 54321
        });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'changed description',
            note: 'changed note',
            amount: 2,
            createdAt: 54321
        }
    });
});

test('Should setup add expense action object with provided values', () =>{
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month\'s rent'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
       type: 'ADD_EXPENSE',
       expense:{
           ...expenseData,
         id: expect.any(String)
       }
    });

});

test('Should setup add expense action object with default values', () => {
    const action = addExpense({});

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});