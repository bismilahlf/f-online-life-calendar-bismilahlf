import React, { Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: '',
      mood: '',
      message: ''
    }
  }

  setDate = (event) => {
    this.setState({
      date: event.target.value,
    })
  }
  
  setMood = (event) => {
    this.setState({
      mood: event.target.value
    })
  }

  setMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  saveData = () => {
    let daysString = localStorage.getItem('days');
    let daysArray = JSON.parse(daysString);
    daysArray.push(this.state);
    localStorage.setItem('days', JSON.stringify(daysArray));
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="date">Fecha</label>
          <input id="date" type="date" onChange={this.setDate}/>
          
          <label>Estado</label>
          <input id="state1" type="radio" name="state" value=":)" onChange={this.setMood}/>
          <label htmlFor="state1">:)</label>
          <input id="state2" type="radio" name="state" value=":(" onChange={this.setMood}/>
          <label htmlFor="state2">:(</label>
            
          {this.state.mood === ':)' && 
            <div>
              <label htmlFor="message">Mensaje</label>
              <input id="message" type="text" onChange={this.setMessage}/>
            </div>
          }

          <input type="submit" value="GUARDAR" onClick={this.saveData}/>
        </form>

        <button onClick={this.props.togglePopup}>Cancelar</button>
      </div>
    )
  }
}
export default Form;