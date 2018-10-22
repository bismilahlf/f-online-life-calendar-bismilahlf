import React, { Component } from 'react';
import './Calendar.css'

class Calendar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      days: []
    }
  }

  // Trae days del Local Storage, lo convierte en un array y lo guarda en el state
  componentDidMount () {
    let daysString = localStorage.getItem('days');
    let daysArray = JSON.parse(daysString);
    this.setState({
      days: daysArray
    });
  }

  render() {
    return (
      <div>
        {/* Pinta un div por cada elemento del array */}
        {this.state.days.map((day, i) => {
          return (
            <div key={i} title={day.message}>{day.mood}</div>
          )
        })}
      </div>
    )
  }
}
export default Calendar;