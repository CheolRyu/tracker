import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');
  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // if the state update is dependent on the previous state, use this syntax
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };
  const changeAmountHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };
  const changeDateHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   endteredDate: event.target.value,
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
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
              value={userInput.enteredTitle} //two ways to access the state
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
              value={userInput.enteredAmount} //two ways to access the state
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
              value={userInput.enteredDate} //two ways to access the state
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
