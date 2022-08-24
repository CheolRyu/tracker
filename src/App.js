import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {
  const DUMMY_EXPENSES = [
    // DUMMY_EXPENSES is a constant
    { id: 1, title: 'Rent', amount: 1000, date: new Date(2021, 2, 21) },
    { id: 2, title: 'Coffee', amount: 2, date: new Date(2020, 5, 28) },
    { id: 3, title: 'Restaurant', amount: 300, date: new Date(2021, 6, 28) },
    { id: 4, title: 'Gym', amount: 50, date: new Date(2019, 2, 28) },
    { id: 5, title: 'Car', amount: 200, date: new Date(2020, 7, 28) },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const onAddExpenseHandler = (expense) => {
    setExpenses((state) => {
      return [expense, ...state];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
