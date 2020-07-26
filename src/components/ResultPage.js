import React, {Component} from 'react'

class ResultPage extends Component {

  correct=(data)=>{
    return data.map((node, index)=>{
        var display_index = index + 1;
        return <div key={index} className='list-group-item d-flex justify-content-between align-items-center'>
          <div className='list-group-item list-group-flush'>
            <div className={'question-' + display_index}> Question: {this.props.question_map[node['ques_id']]} </div>
          
          {/* <div className='list-group-item list-group-flush'> */}
            <div className={'submitted-answer-' + display_index}>Your Answer: {this.props.submitted[index]['submitted_option']} </div>
            <div className={'correct-answer-' + display_index}>Correct Answer: {this.props.submitted[index]['correct_option']} </div>
          </div>
        </div>
    })
  }

  render(){
    return(
      <div className='jumbotron'>
        <h1 className='score' style={{textAlign: 'center'}}>Your score is: {this.props.score}</h1>
      <div className="card" >
        <div className="card-header">
          <div>Answers</div>
          </div>
            <div className="list-group list-group-flush correct-answer">
            <div>{this.correct(this.props.submitted)}</div>
            </div>
        </div>
      </div>
    )
  }
}

export default ResultPage
