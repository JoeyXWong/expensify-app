import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses =[{
    ud: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},{
    ud: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    ud: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}
];

test('Should filter by test value', () => {
    const filter = {
        text:'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[1], expenses[2]]);
});

test('Should filter by startDate', () =>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2]]);
});

test('Should filter by endDate', () => {
   const filters = {
       text: '',
       sortBy: 'date',
       startDate: undefined,
       endDate: moment(0)
   };

   const result = selectExpenses(expenses, filters);
   expect(result).toEqual([expenses[1], expenses[0]]);
});

test('Should sort by date', () => {
   const filters = {
       text: '',
       sortBy: 'date',
       startDate: undefined,
       endDate: undefined
   };

   const result = selectExpenses(expenses, filters);
   expect(result).toEqual([expenses[1],expenses[0], expenses[2]]);
});

test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
});