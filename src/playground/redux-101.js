import {createStore} from 'redux';

const add = ({a,b}) => {
    return a + b;
};

console.log(add({a:1, b:2}));

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const store = createStore((state = {count: 0}, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            };

        case 'SET':
            return {
                count: action.count
            };

        case 'RESET':
            return {
                count: 0
            };

        default:
            return state;
    }
});


const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

//Actions - than an object that gets sent to the store

//I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(incrementCount());

store.dispatch(incrementCount());

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 4
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    count: 101
});
