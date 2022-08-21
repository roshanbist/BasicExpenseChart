import React from 'react';
import ExpenseItems from './ExpenseItems';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const { filterItems } = props;

  if (filterItems.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {filterItems.map((item, id) => (
        <ExpenseItems
          key={id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
