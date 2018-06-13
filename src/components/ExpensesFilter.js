import React from 'react';
import {connect } from 'react-redux';
import {setTextFilter,sortByDate,sortByAmount, setStartDate,setEndDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates'
//import {setStartDate, setEndDate} from '../actions/filters';
import moment from 'moment';

export class ExpensesFilter extends React.Component {
state = {focused:null}
dateChangeListner = ({startDate, endDate}) => {
    console.log('dates are changed',startDate);
        //this.props.dispatch(setStartDate(startDate));
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
        //this.props.dispatch(setEndDate(endDate));
}
render(){
return(
    <div>
        <input type='text' value={this.props.filter.text} onChange={(e)=>{
            console.log('filter value is ',e.target.value);
        //this.props.dispatch(setTextFilter(e.target.value));
        this.props.setTextFilter(e.target.value);
    }}/>
        <select id='selectFilter' value = { this.props.filter.sortBy } onChange = {(e)=>{
            let filter = e.target.value 
            console.log(filter);
            switch(filter){
                case 'amount':
                   // this.props.dispatch(sortByAmount());
                   this.props.sortByAmount();
                    break;
                case 'date':
                   // this.props.dispatch(sortByDate());
                   this.props.sortByDate();
                    break;
            }
        }}>
            <option value='amount'>Amount</option>
            <option value='date'>Date</option>
        </select>
        <DateRangePicker
            startDate={this.props.filter.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.props.filter.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={(startDate, endDate) => this.dateChangeListner(startDate,endDate)} // PropTypes.func.isRequired,
            focusedInput= {this.state.focused}
            onFocusChange={(focused) => this.setState({focused })} // PropTypes.func.isRequired    
            numberOfMonths={1}
            showClearDates
            isOutsideRange={()=>false}
            />
    </div>
)
}
}
const mapStateToProps = (state) => (
    {filter:state.filters}
)
const mapDispatchToProps = (dispatch) => (
    {
        setStartDate : ({startDate}) => dispatch(setStartDate(startDate)),
        setEndDate : ({endDate}) => dispatch(setEndDate(endDate)),
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByAmount: () => dispatch(sortByAmount),
        sortByDate: () => dispatch(sortByDate)
    }
)
export default connect(mapStateToProps)(ExpensesFilter);