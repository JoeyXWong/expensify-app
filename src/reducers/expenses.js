
//expenses reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]; //Same effect as below code, does not mutate state
        //return state.concat(action.expense); //concat does not mutate array
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id); //destructured id from expense object
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
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
