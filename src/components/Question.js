import React from 'react';
import '../styles/Question.css';


const Question = ({question}) => (
  <div className="question">
    <p className="question-text">{question.text}</p>
    <img src={question.img} className="question-image" alt="mercedes" />
  </div>
);

export default Question;
