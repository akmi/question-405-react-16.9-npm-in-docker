import React, {Component} from 'react'
import '../style/style.css'


class ProgressBar extends Component {
  render() {
    return(
      <div className='progress progress-bar-striped progress-bar-animated'>
        <Filter percentage={this.props.percentage}/>
      </div>
    )
  }
}

class Filter extends Component {
  render() {
    return(
      <div className='filter bg-success progress' style={{width: `${this.props.percentage}%`}}>
      </div>
    )
  }
}

export default ProgressBar
