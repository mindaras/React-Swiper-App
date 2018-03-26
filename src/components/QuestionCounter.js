import React from 'react';
import '../styles/QuestionCounter.css';

const QuestionCounter = ({current, total}) => (
  <div className="question-counter">
    <span className="question-counter__current">{current}</span>/
    <span className="question-counter__total">{total}</span>
  </div>
);

export default QuestionCounter;
