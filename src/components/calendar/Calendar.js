import React, { Component } from 'react'

class Calendar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      days: []
    }
  }

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
        {this.state.days.map((day) => {
          return (
            <div>{day.mood}</div>
          )
        })}
      </div>
    )
  }
}
export default Calendar;