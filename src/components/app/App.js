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

  componentDidMount() {
    if( !localStorage.getItem('days') ) {
      localStorage.setItem('days', '[]');
    }
  }

  togglePopup = () => {
    if(this.state.showForm) {
      this.setState({
        showForm: false
      })
    } else {
      this.setState({
        showForm: true
      })
    }
  }
  
  render() {
    return (
      <div>
        {this.state.showForm === true && <Form togglePopup={this.togglePopup} />}
        <button onClick={ this.togglePopup }>+</button>
        <Calendar/>
      </div>
    )
  }
}

export default App;