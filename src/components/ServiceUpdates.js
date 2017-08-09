import React  from 'react';
import CallingPoint from './CallingPoint';
import './ServiceUpdates.css';

const ServiceUpdates = ({ children }) => (
  <ul className="ServiceUpdates">
    {children.map((item, i) => (
      <li key={i}>
        <CallingPoint {...item} />
      </li>
    ))}
  </ul>);

export default ServiceUpdates;
