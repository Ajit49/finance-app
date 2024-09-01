import React from 'react';
import { useSelector } from 'react-redux';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import ChartComponent from './ChartComponent';

const Dashboard = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const totalIncome = transactions
    .filter((item) => item.type === 'income')
    .reduce((acc, item) => acc + item.amount, 0);

  const totalExpenses = transactions
    .filter((item) => item.type === 'expense')
    .reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Finance Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-xl">Total Income: ${totalIncome}</h2>
        <h2 className="text-xl">Total Expenses: ${totalExpenses}</h2>
      </div>
      <ChartComponent />
      <TransactionForm />
      <TransactionList />
    </div>
  );
};

export default Dashboard;
