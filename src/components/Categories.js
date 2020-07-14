import React, { Component } from 'react';
import { Link } from "react-router-dom";
import QuizApi from '../api/QuizApi';

class Categories extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getAllQuizes()
  }

  getAllQuizes = async () => {
    const response = await QuizApi.get('api/quiz/all')
    this.setState({
      data: response.data
    })
  }

  getQuestions = async (id) => {
    // this.props.navigate
    const response = await QuizApi.get('/api/quiz-questions/all/' + id)
    this.setState({
      quizData: response.data,
      quizId: id
    })
  }

  render() {
    const { data } = this.state;
    return (
      <div className='jumbotron'>
        <h1 className='align-middle text-center'>Welcome to CodeJudge</h1>
        {
          data.map((element, index) => {
            return (
              <div key={index}>
                <div className='card'>
                  <ul className='list-group list-group-flush'>
                    <div className='list-group-item'>
                      <div className='list-group-item d-flex justify-content-between align-items-center'>
                        <h3 className={'quiz-list-' + element.id}>{element.name}</h3>
                        <Link className="btn btn-success" to={`/quiz/${element.id}`}>Start</Link>
                      </div>
                      <p> {element.description} </p>
                    </div>
                  </ul>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Categories
