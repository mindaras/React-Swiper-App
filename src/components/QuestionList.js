import React, { Component } from 'react';
import '../styles/QuestionList.css';
import Question from './Question';

class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.slideAnimation = this.slideAnimation.bind(this);
  }

  componentDidMount() {
    this.slideAnimation();
  }

  componentWillUpdate() {
    this.slideAnimation();
  }

  slideAnimation() {
    let element = document.querySelector('.question-list');
    element.className = 'question-list';
    setTimeout(() => element.classList.add(this.props.direction), 200);
  }

  render() {
    return (
      <div className='question-list'>
        <Question question={this.props.question} />
      </div>
    );
  }
}

export default QuestionList;
