import React from 'react';
import '../styles/Finished.css';

const Finished = ({answeredQuestions}) => {
  const answerList = answeredQuestions.map((question, i) => <li key={i}>{`${i + 1}.`} "{question.text}" <br /> <strong>{question.answer}</strong></li>);

  return (
    <div className="finished">
      <h3 className="finished__title">Finished!</h3>
      <p className="finished__answers-title">Your answers:</p>
      <ul className="finished__answers-list">
        {answerList}
      </ul>
      <a href="./" className="finished-cta">Get your prize</a> 
    </div>
  );
};

export default Finished;
