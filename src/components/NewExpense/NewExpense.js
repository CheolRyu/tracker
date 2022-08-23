import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
  const [isEditing, setIsEtiintg] = useState(false);
  const savedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEtiintg(false);
  };
  const startEditingHandler = () => {
    setIsEtiintg(true);
  };
  const onCancelHandler = () => {
    setIsEtiintg(false);
  };
  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={savedExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
