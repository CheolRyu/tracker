import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <div>
      <form>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label htmlFor='expense-title'>Title</label>
            <input type='text' id='expense-name' />
          </div>
          <div className='new-expense__control'>
            <label htmlFor='expense-title'>Amount</label>
            <input type='number' min='0.01' step='0.01' id='expense-name' />
          </div>
          <div className='new-expense__control'>
            <label htmlFor='expense-title'>Date</label>
            <input
              type='date'
              min='2020-01-01'
              max='2023-12-31'
              id='expense-name'
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
