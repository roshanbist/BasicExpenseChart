import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const { onAddExpense } = props;

  // defining useState for submit button addNewExpense
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    onAddExpense(expenseData);
    setShowExpenseForm(false);
  };

  const addNewExpense = () => {
    setShowExpenseForm(true);
  };

  const hideFormHandler = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className='new-expense'>
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}

      {!showExpenseForm && (
        <div className='btn-wrap'>
          <button type='submit' onClick={addNewExpense}>
            Add New Expenses
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
