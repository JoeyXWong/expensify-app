import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setStartDate, setTextFilter, sortByAmount, sortByDate, setEndDate} from "../actions/filters";

class ExpenseListFilters extends React.Component{

    state = {
      calendarFocused: null,
    };

    onDatesChange = ({startDate, endDate}) =>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (focus)=>{
        this.setState(()=>({ calendarFocused: focus }));
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select value={this.props.filters.sortBy}
                        onChange={(e)=>{
                            const switchValue = e.target.value;
                            switch(switchValue){
                                case 'date':
                                    return this.props.dispatch(sortByDate());
                                case 'amount':
                                    return this.props.dispatch(sortByAmount());
                                default:
                                    return this.props.dispatch(sortByAmount());
                            }
                        }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    startDateId={'start'}
                    endDateId={'end'}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);