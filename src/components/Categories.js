import React, {Component} from 'react'

class Categories extends Component{
  constructor(){
    super()
    this.getQuestions = this.getQuestions.bind(this)
  }

  getQuestions() {
    this.props.getQuiz(this.props.id)
  }

  render() {
    return(
      <div className='card'>
        <ul className='list-group list-group-flush'>
          <div className='list-group-item'>
            <div className='list-group-item d-flex justify-content-between align-items-center'>
              <h3 className={'quiz-list-'+ this.props.id}>{this.props.name}</h3>
              <button className="btn btn-success" onClick={this.getQuestions}>
                <div className='start-quiz'>Start</div>
              </button>
            </div>
            <p> {this.props.description} </p>
          </div>
        </ul>
      </div>
    )
  }
}

export default Categories
