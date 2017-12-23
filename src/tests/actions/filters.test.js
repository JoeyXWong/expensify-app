import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";
import moment from 'moment';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
       type: 'SET_START_DATE',
       startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
       type: 'SET_END_DATE',
       endDate: moment(0)
    });
});

test('Should generate set text filter for provided value', () =>{
    const text = 'dog';
    const action = setTextFilter(text);

    expect(action).toEqual({
       type: 'SET_TEXT_FILTER',
       text
    });
});

test('Should generate set text filter for default value', () =>{
    const action = setTextFilter();

    expect(action).toEqual({
       type: 'SET_TEXT_FILTER',
       text: ''
    });
});

test('Should generate sortBy amount', () =>{
    const action = sortByAmount();

    expect(action).toEqual({
       type: 'SORT_BY_AMOUNT',
       sortBy: 'amount'
    });

});

test('Should generate sortBy date', () =>{
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
});

