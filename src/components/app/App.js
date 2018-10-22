import React, { Component } from 'react';
import './App.css';
import Calendar from '../calendar/Calendar';
import Form from '../form/Form';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
    }
  }

  addDay = (e) => {
    this.setState({
      showForm: true
    })
  }

  render() {
    return (
      <div>
        {this.state.showForm && <Form/>}
        <button onClick={ this.addDay }>+</button>
        <Calendar/>
      </div>
    )
  }
}

export default App;