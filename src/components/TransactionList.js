import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction } from '../redux/transactionsSlice';

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-lg font-semibold">Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="border p-2 my-2 flex justify-between">
            <span>{transaction.description} - ${transaction.amount}</span>
            <button
              onClick={() => dispatch(deleteTransaction(transaction.id))}
              className="bg-red-500 text-white px-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
