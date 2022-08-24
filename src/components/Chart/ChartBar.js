import React from 'react';
import './ChartBar.css';
const ChartBar = (props) => {
  // props.value = 0, props.maxValue = 0, props.label = 'Jan'
  let barFillHeight = '0%'; // default value
  if (props.maxValue > 0) {
    // maxValue is a custom property
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'; // value is a custom property (props.value)
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
