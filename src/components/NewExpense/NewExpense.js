import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = () => {
  return (
    <div className='new-expense'>
      <h1>New Expense</h1>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
