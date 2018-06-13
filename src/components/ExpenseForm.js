import React from 'react'
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            description: props.expense ? props.expense.description:'',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount:'',
            createdAt: props.expense ? moment(props.expense.createdAt):moment(),
            calendarFocus:false
        }
    }
    onDateChange = (createdAt) => {
        //console.log('date has changed');
        if(createdAt)
            this.setState({createdAt:createdAt})
    }
    descriptionChangeListner = (e) => {
        let desc=e.target.value;
        //console.log(desc);
        this.setState({description:desc})
    }
    noteChangeListner = (e) => {
        let note = e.target.value;
        this.setState({note:note})
    }
    amountChangeListner = (e) => {
        let amount = e.target.value;
        //console.log(amount);
        if(!amount || amount.match(/^\d*(\.\d{0,2})?$/))
            this.setState({amount:amount});
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log('clicked the button');
        this.props.onSubmit(
            {...this.props.expense,
                description:this.state.description,
                note:this.state.note,
                amount:this.state.amount,
                createdAt:this.state.createdAt.valueOf()
            })
    } 
    render(){
    return (
        <div>
        <form onSubmit = {this.onSubmit}>
            <input 
                type='text'
                value = {this.state.description}
                placeholder='Description'
                onChange = {this.descriptionChangeListner}
                autoFocus
                />
            <input 
                type='text'
                placeholder='Amount'
                value={this.state.amount} 
                onChange = {this.amountChangeListner}
                />
            <SingleDatePicker
                date={this.state.createdAt} // momentPropTypes.momentObj or null
                onDateChange={this.onDateChange} // PropTypes.func.isRequired
                focused={this.state.calendarFocus} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({calendarFocus:focused })} // PropTypes.func.isRequired
                numberOfMonths={1}
                isOutsideRange={()=>false}
                />
            <textarea
                placeholder = 'Add note for your expense(optional)'
                onChange = {this.noteChangeListner}    
            />
            <button>Add Expense</button>
        </form>
    </div>
    )
    }
}
export default ExpenseForm