import React from 'react';
import './CallingPoint.css';

const getIndicatorClasses = ({ hasDeparted, isTrainHere, isOrigin, isDestination }) => {
  const classes = ['CallingPoint__indicator'];

  hasDeparted && classes.push('-departed');
  isTrainHere && classes.push('-train-here');
  isOrigin && classes.push('-origin');
  isDestination && classes.push('-destination');

  return classes.join(' ');
};

const CallingPoint = ({ hasDeparted, isTrainHere, station, scheduledAt, estimatedAt, isOrigin, isDestination }) => (
  <div className={`CallingPoint${hasDeparted ? ' -departed' : ''}`}>
    <time className="CallingPoint__scheduled-at">{ scheduledAt }</time>
    <div className={getIndicatorClasses({ hasDeparted, isTrainHere, isOrigin, isDestination })}>
      {isTrainHere && <div className={`CallingPoint__train${hasDeparted ? ' -departed' : ''}`} />}
    </div>
    <dl className="CallingPoint__status">
      <dt className="CallingPoint__station">{ station }</dt>
      <dd className="CallingPoint__estimated-at">{ `${hasDeparted ? 'Dept.' : 'Exp.'} ${estimatedAt}` }</dd>
    </dl>
  </div>
);

export default CallingPoint;
