import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const { ExpensesData } = props;

  const [filteredYear, setFilteredYear] = useState('2020');

  const yearSelectedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log(typeof selectedYear);
  };

  const filterData = ExpensesData.filter((data) => {
    return data.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onYearSelected={yearSelectedHandler}
      />

      <ExpenseChart filterDataExpenses={filterData} />
      <ExpensesList filterItems={filterData} />
    </Card>
  );
};

export default Expenses;
