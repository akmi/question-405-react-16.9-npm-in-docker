import React, {Component} from 'react'

class QTiles extends Component {
  buttonClicked = (event)=>{
    event.preventDefault()
    this.props.clickFunc(event.target.value)
  }

  getAnswers = (data)=>{
    return data.map((ans,index) => {
      return (
          <div className="input-group">
          <div className="input-group-prepend">
              <div className="input-group-text">
                <input type="radio" aria-label="Radio button for following text input" onChange={this.buttonClicked(index+1)}/>
              </div>
              <div  className="list-group-item list-group-item-action">{ans}</div>
            </div>
          </div>
      )
    })
  }

  render() {
    return (
      <div className='jumbotron'>
          <div className="card" style={{width: '65rem'}}>
            <h3 className="card-header">
              <div className='question'>{this.props.name}</div>
            </h3>
              <ul className="list-group list-group-flush">
                
              <div className="input-group-prepend" style={{width: '64rem'}}>
                  <div className="input-group-text">
                    <input className='answer' type="radio" aria-label="Radio button for following text input" id='1' onClick={this.buttonClicked} value={this.props.options[0]} />
                  </div>
                  <p  className="list-group-item list-group-item-action">
                  <div className='answer-value'>{this.props.options[0]}</div>
                  </p>
              </div>

              <div className="input-group-prepend" style={{width: '64rem'}}>
                  <div className="input-group-text">
                    <input className='answer' type="radio" aria-label="Radio button for following text input" id='2' onClick={this.buttonClicked} value={this.props.options[1]}/>
                  </div>
                  <p  className="list-group-item list-group-item-action">
                  <div className='answer-value'>{this.props.options[1]}</div>
                  </p>
                </div>

              <div className="input-group-prepend" style={{width: '64rem'}}>
                  <div className="input-group-text">
                    <input className='answer' type="radio" aria-label="Radio button for following text input" id='3' onClick={this.buttonClicked} value={this.props.options[2]}/>
                  </div>
                  <p  className="list-group-item list-group-item-action">
                  <div className='answer-value'>{this.props.options[2]}</div>
                  </p>
                </div>

              <div className="input-group-prepend" style={{width: '64rem'}}>
                  <div className="input-group-text">
                    <input className='answer' type="radio" aria-label="Radio button for following text input" id='4' onClick={this.buttonClicked} value={this.props.options[3]}/>
                  </div>
                  <p  className="list-group-item list-group-item-action">
                  <div className='answer-value'>{this.props.options[3]}</div>
                  </p>
                </div>
              </ul>
          </div>
      </div>
    )
  }
}

export default QTiles
