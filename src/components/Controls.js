import React from 'react';
import '../styles/Controls.css';

const Controls = ({handleYes, handleNo}) => (
  <div className="controls">
    <div className="controls__item controls__item--no" onClick={handleNo}></div>
    <div className="controls__item controls__item--yes" onClick={handleYes}></div>
  </div>
);

export default Controls;
