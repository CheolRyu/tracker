import React, { Component } from 'react';
import Expenses from './components/Expenses/Expenses';
const App = () => {
  const date = new Date();

  const expenses = [
    { id: 1, title: 'Rent', amount: 1000, date: date },
    { id: 2, title: 'Coffee', amount: 2, date: date },
    { id: 3, title: 'Restaurant', amount: 300, date: date },
    { id: 4, title: 'Gym', amount: 50, date: date },
    { id: 5, title: 'Car', amount: 200, date: date },
  ];

  return (
    <div>
      <h1>Expense Tracker</h1>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
