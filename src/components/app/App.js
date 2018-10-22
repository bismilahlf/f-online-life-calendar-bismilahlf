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

  // Crea el array days si no existe en el local storage
  componentDidMount() {
    if( !localStorage.getItem('days') ) {
      localStorage.setItem('days', '[]');
    }
  }

  // Cambia showForm entre true y false
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
        {/* Muestra Form si this.state.showForm es true */}
        {this.state.showForm === true && <Form togglePopup={this.togglePopup} />}
        <button 
          onClick={ this.togglePopup } className="form-button"
        >
          +
        </button>
        <Calendar/>
      </div>
    )
  }
}

export default App;