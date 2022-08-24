import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
const Expenses = (props) => {
  // props.expenses = [{title: 'Car Insurance', amount: 294.67, date: Mon Jan 01 2018 00:00:00 GMT-0500 (Eastern Standard Time)}, ...]
  const [selectedOption, setSelectedOption] = useState('2020'); // useState() returns an array with exactly 2 elements
  const onSelectFilterHandler = (filterData) => {
    // filterData = '2020'
    setSelectedOption(filterData); // setSelectedOption() is a function that React provides us to update the state (selectedOption)
    console.log(filterData);
  }; // onSelectFilterHandler
  const filteredExpenses = props.items.filter((expense) => {
    // filter() method transforms array into new array
    return expense.date.getFullYear().toString() === selectedOption;
  });
  console.log(filteredExpenses, 'filteredExpenses');
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={selectedOption}
          onSelectFilter={onSelectFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
