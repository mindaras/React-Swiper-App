import React, { Component } from 'react';
import './styles/App.css';
import Swipe from 'react-swipe-component';
import QuestionList from './components/QuestionList';
import Controls from './components/Controls';
import QuestionCounter from './components/QuestionCounter';
import Finished from './components/Finished';

class App extends Component {
  constructor(props) {
    super(props);

    this.swiped = false;

    this.handleYes = this.handleYes.bind(this);
    this.handleNo = this.handleNo.bind(this);
    this.navigateBack = this.navigateBack.bind(this);
    this.finish = this.finish.bind(this);
    this.onSwipeListener = this._onSwipeListener.bind(this);

    this.state = {
      questions: [
        {
          text: 'Do you like this mercedes?',
          img: './images/mercedes.png'
        },
        {
          text: 'Do you like this audi?',
          img: './images/audi.png'
        },
        {
          text: 'Do you like this bmw?',
          img: './images/bmw.png'
        }
      ],
      total: null,
      current: null,
      answeredQuestions: [],
      direction: 'right',
      finished: false
    }
  }

  componentDidMount() {
    this.setState({total: this.state.questions.length, current: 1});

    // disabling scrolling
    document.ontouchmove = (e) => e.preventDefault();
  }

  handleYes(id) {
    // check if answer already exists
    if (this.state.answeredQuestions.some(question => question.id === id)) {
      this.setState({answeredQuestions: this.state.answeredQuestions.filter(question => (
        question.id === id ? question.answer = 'yes' : question
      ))});
    } else {
      this.setState({answeredQuestions: [...this.state.answeredQuestions, {id, text: this.state.questions[this.state.current - 1].text, answer: 'yes'}]});
    }
    // update current question
    this.state.current < this.state.total ? this.setState({current: this.state.current + 1, direction: 'right'}) : this.finish();
  }

  handleNo(id) {
    // check if answer already exists
    if (this.state.answeredQuestions.some(question => question.id === id)) {
      this.setState({answeredQuestions: this.state.answeredQuestions.filter(question => (
        question.id === id ? question.answer = 'no' : question
      ))});
    } else {
      this.setState({answeredQuestions: [...this.state.answeredQuestions, {id, text: this.state.questions[this.state.current - 1].text, answer: 'no'}]});
    }
    // update current question
    this.state.current < this.state.total ? this.setState({current: this.state.current + 1, direction: 'right'}) : this.finish();
  }

  navigateBack() {
    this.state.current > 1 ? this.setState({current: this.state.current - 1, direction: 'left'}) : '';
  }

  navigateForward() {
    this.state.current < this.state.total ? this.setState({current: this.state.current + 1, direction: 'right'}) : this.finish();
  }

  _onSwipeListener(e) {
    // check if x axis and is not being swiped
    if (e[1] === 0 && !this.swiped) {
      // check direction
      if (e[0] > 0) {
        this.navigateBack();
        this.swiped = true;
      } else if (e[0] < 0) {
        this.navigateForward();
        this.swiped = true;
      }
    }
    // let swipe again after 1 second delay
    setTimeout(() => this.swiped = false, 300);
  }

  finish() {
    this.setState({finished: true});
  }

  render() {
    const loading = <div className="loading">Loading...</div>;

    return (
      <div className="App">
        <Swipe
          nodeName="div"
          className="test"
          mouseSwipe={false}
          onSwipe={this.onSwipeListener} >
          <div className="app__container">
            <header className="app__logo">Swiper</header>
            <div className={this.state.current > 1 && !this.state.finished ? 'app-back active' : 'app-back'} onClick={this.navigateBack}></div>
            {this.state.current ?
              !this.state.finished ?
                <div>
                  <QuestionCounter current={this.state.current} total={this.state.total} />
                  <QuestionList question={this.state.questions[this.state.current - 1]} direction={this.state.direction} />
                  <Controls handleNo={this.handleNo.bind(this, this.state.current)} handleYes={this.handleYes.bind(this, this.state.current)} />
                </div> :
                <Finished answeredQuestions={this.state.answeredQuestions} /> :
              loading}
          </div>
        </Swipe>
      </div>
    );
  }
}

export default App;
