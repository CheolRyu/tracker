import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
  // props.dataPoints = [{label: 'Jan', value: 0}, {label: 'Feb', value: 0}, ...]
  const totalMaximum = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value) // spread operator to pull out all values from array and pass them as a list of values to Math.max()
  );
  return (
    <div className='chart'>
      {props.dataPoints.map(
        (
          dataPoint // map() method transforms array into new array
        ) => (
          <ChartBar
            key={dataPoint.label} // key is a special string attribute you have to include when creating lists of elements
            value={dataPoint.value}
            maxValue={totalMaximum} // maxValue is a custom property
            label={dataPoint.label}
          />
        )
      )}
    </div>
  );
};

export default Chart;
