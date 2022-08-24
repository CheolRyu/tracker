import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });
  const [enteredTitle, setEnteredTitle] = useState(''); // useState() returns an array with exactly 2 elements
  const [enteredAmount, setEnteredAmount] = useState(''); // useState() returns an array with exactly 2 elements
  const [enteredDate, setEnteredDate] = useState(''); // useState() returns an array with exactly 2 elements
  const titleChangeHandler = (event) => {
    // event = {target: {…}, isTrusted: true, nativeEvent: {…}, currentTarget: null, eventPhase: 2, bubbles: false, cancelable: true, defaultPrevented: false, composed: true, timeStamp: 1000, …}

    setEnteredTitle(event.target.value);
  };
  const changeAmountHandler = (event) => {
    // event = {target: {…}, isTrusted: true, nativeEvent: {…}, currentTarget: null, eventPhase: 2, bubbles: false, cancelable: true, defaultPrevented: false, composed: true, timeStamp: 1000, …}
    setEnteredAmount(event.target.value); // setEnteredAmount() is a function that React provides us to update the state (enteredAmount)
  };
  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value); // setEnteredDate() is a function that React provides us to update the state (enteredDate)
  };
  const submitHandler = (event) => {
    // event is a JavaScript object
    event.preventDefault(); // prevent default behavior of submitting the form
    const expenseData = {
      title: enteredTitle, // enteredTitle is a custom property
      amount: +enteredAmount, // + converts string to number
      date: new Date(enteredDate), // new Date() converts string to date
    };
    props.onSaveExpenseData(expenseData); // onSaveExpenseData is a custom property
    setEnteredTitle(''); // reset the form
    setEnteredAmount(''); // reset the form
    setEnteredDate(''); // reset the form
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label htmlFor='expense-title'>Title</label>
            <input
              type='text'
              id='expense-name'
              onChange={titleChangeHandler}
              value={enteredTitle} //two ways to access the state
            />
          </div>
          <div className='new-expense__control'>
            <label htmlFor='expense-title'>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              id='expense-name'
              onChange={changeAmountHandler}
              value={enteredAmount} //two ways to access the state
            />
          </div>
          <div className='new-expense__control'>
            <label htmlFor='expense-title'>Date</label>
            <input
              type='date'
              min='2020-01-01'
              max='2023-12-31'
              id='expense-name'
              onChange={changeDateHandler}
              value={enteredDate} //two ways to access the state
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
