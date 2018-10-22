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
    let daysString = localStorage.getItem('days'); // Trae "days" del LocalStorage
    let daysArray = JSON.parse(daysString); // Lo convierte en un array
    let currentDay = {
      date: this.state.date,
      mood: this.state.mood,
      message: this.state.message
    };
    daysArray.push(currentDay); // Mete "currentDay" en el array "days"
    localStorage.setItem('days', JSON.stringify(daysArray)); // Vuelve a guardar "days" en el LocalStorage
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

           {/* Muestra el input del mensaje si "mood" es ":)"  */}
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