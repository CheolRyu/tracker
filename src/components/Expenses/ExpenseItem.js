import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = ({ date, title, amount }) => {
  useState();
  const clickHandler = () => {
    console.log('clicked!');
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title} </h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};
export default ExpenseItem;
