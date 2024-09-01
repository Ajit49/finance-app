import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/transactionsSlice';

const TransactionForm = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    dispatch(
      addTransaction({
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        type,
      })
    );

    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 mr-2"
      />
      <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2 mr-2">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
