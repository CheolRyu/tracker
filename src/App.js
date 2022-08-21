import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {
  const date = new Date();

  const expenses = [
    { id: 1, title: 'Rent', amount: 1000, date: date },
    { id: 2, title: 'Coffee', amount: 2, date: date },
    { id: 3, title: 'Restaurant', amount: 300, date: date },
    { id: 4, title: 'Gym', amount: 50, date: date },
    { id: 5, title: 'Car', amount: 200, date: date },
  ];
  const onAddExpenseHandler = (expense) => {
    console.log('in addExpense in App.js: ', expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
