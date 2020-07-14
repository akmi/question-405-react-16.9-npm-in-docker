import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Categories from './Categories';
import Quiz from './Quiz'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="/quiz/:quizId" component={Quiz} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
