import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const expenses = transactions.filter((item) => item.type === 'expense');
  const income = transactions.filter((item) => item.type === 'income');

  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Income vs Expenses',
        data: [income.reduce((acc, item) => acc + item.amount, 0), 
          expenses.reduce((acc, item) => acc + item.amount, 0)],
          backgroundColor: ['#66bfbf', '#fd5959'],
      },
    ],
  };

  return (
    <div className="my-6" style={{ width: '300px', height:'300px'}}>
      <Pie data={data} />
    </div>
  );
};

export default ChartComponent;
