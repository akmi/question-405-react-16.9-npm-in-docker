import React, {Component} from 'react'
import Categories from './Categories'
import Quiz from './Quiz'
import QuizApi from '../api/QuizApi'

class Router extends Component {
  constructor() {
    super()
    this.state={
      quizData:{},
      quizId:-1
    }
    this.getQuiz = this.getQuiz.bind(this);
    this.getCategories = this.getCategories.bind(this)
    this.showCategories = this.showCategories.bind(this)
  }

  getQuiz(id) {
    this.getSubmit(id)
  }

  async getSubmit(id){
      const response= await QuizApi.get('/api/quiz-questions/all/'+id)
      this.setState({
        quizData:response.data,
        quizId:id
      })
  }

  showCategories(data) {
    return data.map((element,index)=>{
       return (
       <div key={index}>
         
          <Categories id={element.id} name={element.name} description={element.description} getQuiz={this.getQuiz}/>
          <br/>
       </div>
     )
    })
  }

  getCategories() {
    return(
      <div className='jumbotron'>
        <h1 className='align-middle' style={{textAlign: 'center'}}>Welcome to CodeJudge</h1>
        {this.showCategories(this.props.data)}
      </div>
    )
  }

  getQuizQuestions() {
    return(
      <div>
        <Quiz id={this.state.quizId} name={this.state.quizData.name} questions={this.state.quizData.questions}/>
      </div>
    )
  }

  render(){
    if(!this.state.quizData.name) {
      return(
        this.getCategories()
      )
    } else{
        return (
          this.getQuizQuestions()
      )
    }
  }
}

export default Router
