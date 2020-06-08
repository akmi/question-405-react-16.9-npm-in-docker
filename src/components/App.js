import React, {Component} from 'react'
import Router from './Router'
import QuizApi from '../api/QuizApi'

class App extends Component {
  constructor() {
    super()
    this.state={
      data:[]
    }
  }

  componentDidMount() {
    this.getSubmit()
  }

  async getSubmit() {
      const response= await QuizApi.get('api/quiz/all')
      this.setState({
        data:response.data
      })
  }

  render() {
    return(
      <div className='ui container'>
        <Router data={this.state.data} />
      </div>
    )
  }
}

export default App
