import React from 'react';
import Chart from '../Chart/Chart';
import { ChartDataPoints } from './ChartDataPoints';

const ExpenseChart = (props) => {
  const { filterDataExpenses } = props;
  // const ChartDataPoints = [
  //   { label: 'Jan', value: 0 },
  //   { label: 'Feb', value: 0 },
  //   { label: 'Mar', value: 0 },
  //   { label: 'Apr', value: 0 },
  //   { label: 'May', value: 0 },
  //   { label: 'Jun', value: 0 },
  //   { label: 'Jul', value: 0 },
  //   { label: 'Aug', value: 0 },
  //   { label: 'Sep', value: 0 },
  //   { label: 'Oct', value: 0 },
  //   { label: 'Nov', value: 0 },
  //   { label: 'Dec', value: 0 },
  // ];

  for (const item of filterDataExpenses) {
    // month are counted from 0 - 11
    let expenseMonth = item.date.getMonth();
    ChartDataPoints[expenseMonth].value += item.amount;
  }

  return <Chart ChartDataPoints={ChartDataPoints} />;
};

export default ExpenseChart;
