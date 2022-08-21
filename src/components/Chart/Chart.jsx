import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
  const { ChartDataPoints } = props;

  const chartDataValues = ChartDataPoints.map(
    (chartDataPoint) => chartDataPoint.value
  );

  const totalMaximum = Math.max(...chartDataValues);

  return (
    <div className='chart'>
      {ChartDataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
