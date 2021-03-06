import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
    //  setUserInput((prevState) => {
    //    return { ...prevState, enteredTitle: event.targe.value };
    //  });
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
    //  setUserInput((prevState) => {
    //    return { ...prevState, enteredAmount: event.targe.value };
    //  });
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
    //  setUserInput((prevState) => {
    //    return { ...prevState, enteredDate: event.targe.value };
    //  });
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="Title"></label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Amount"></label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Date"></label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__action">
          <button type="button" onClick={props.onCancel}>
            Close
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
