import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
const Expenses = (props) => {
  const [selectedOption, setSelectedOption] = useState('2020');
  const onSelectFilterHandler = (filterData) => {
    setSelectedOption(filterData);
    console.log(filterData);
  };
  const filteredExpenses = props.items.filter((expense) => {
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
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
