import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { ExpensesData } from './components/Expenses/ExpensesData';

function App() {
  const [expenses, setExpenses] = useState(ExpensesData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses ExpensesData={expenses} />
    </div>
  );
}

export default App;
