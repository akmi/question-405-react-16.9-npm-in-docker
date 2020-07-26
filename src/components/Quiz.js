import React, { Component } from 'react'
import ProgressBar from './ProgressBar'
import QTiles from './QTiles'
import ResultPage from './ResultPage'
import QuizApi from '../api/QuizApi'

class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      questions: [],
      quizId: null,
      quizName: '',
      questionId: -1,
      curQues: '',
      curAns: [],
      progress: 0,
      time: 0,
      data: [],
      answerToSend: [],
      finished: false,
      score: 0,
      answers_recived: [],
      question_map: {},
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({ quizId: params.quizId });
    this.getQuiz(params.quizId);
  }

  getQuiz = async (id) => {
    const response = await QuizApi.get('/api/quiz-questions/all/' + id)
    if (response && response.data) {
      this.setState({
        data: response.data.questions,
        questions: response.data.questions,
        quizName: response.data.name
      })
    }
  }

  updateProgressBar = () => {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick = () => {
    this.setState({
      progress: this.state.progress - 0.84,
      time: this.state.time - 1000
    })
    if (Math.floor(this.state.progress) === -1) {
      this.changeQuestion(null)
    }
  }

  changeQuestion = (answerProvidedByUser) => {
    clearInterval(this.interval);
    let count = this.state.count
    let options, question, ansToSend, questionId, question_map;
    const { questions } = this.state;

    if (count < questions.length) {
      this.updateProgressBar()
      options = this.splitOptions(questions[count]['options'])
      question = questions[count]['name']
      questionId = questions[count]['id']
      ansToSend = this.state.answerToSend
      question_map = this.state.question_map
      question_map[questionId] = question
      if (count > 0) {
        ansToSend.push({ ques_id: questionId - 1, submitted_option: answerProvidedByUser })
      }
      count += 1
      this.setState({
        curQues: question,
        curAns: options,
        count: count,
        answerToSend: ansToSend,
        questionId: questionId,
        progress: 100,
        time: 15000,
        question_map: question_map,
      })
    } else {
      this.state.answerToSend.push({ ques_id: this.state.questionId, submitted_option: answerProvidedByUser })
      this.getQuizResult()
    }
  }

  async getQuizResult() {
    const response = await QuizApi.post('/api/user/quiz-score', {
      'quiz_id': this.state.quizId,
      'mappings': this.state.answerToSend
    })
    console.log(response)
    this.setState({
      finished: true,
      score: response.data.score,
      answers_recived: response.data.questions
    })
  }

  splitOptions = (str) => {
    let result = str.split(',');
    return result;
  }

  getResult = () => {
    console.log(this.state)
    return (
      <div>
        <ResultPage score={this.state.score}
          question_map={this.state.question_map}
          submitted={this.state.answers_recived} />
      </div>
    )
  }

  getTime = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
      <div className='time-bar'>Time Remaining: {minutes + ":" + (seconds < 10 ? '0' : '') + seconds} / 0:15 seconds</div>
    )
  }

  showQuestion = () => {
    if (this.state.data[0] === undefined) {
      return (
        <div>Loading...</div>
      )
    } else if (this.state.finished) {
      return (
        this.getResult()
      )
    } else {
      if (this.state.curAns.length > 0) {
        return (
          <div>
            <div>
              <ProgressBar percentage={this.state.progress} />
              <div>{this.getTime(this.state.time)}</div>
            </div>
            <QTiles clickFunc={this.answerClicked} id={this.state.count} name={this.state.curQues} options={this.state.curAns} />
          </div>
        )
      } else {
        this.changeQuestion(null)
      }
    }
  }

  answerClicked = (answer) => {
    this.changeQuestion(answer)
  }

  render() {
    return (
      <div>
        <h1 className="card text-white bg-secondary ui container text-center">{this.state.quizName}</h1>
        <div>{this.showQuestion()}</div>
      </div>
    )
  }
}

export default Quiz
