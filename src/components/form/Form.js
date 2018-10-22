import React, { Component } from 'react';
import './Form.css';

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
      <div className="form-wrapper">
        <form>
          <label 
            htmlFor="date" 
            className="date-label"
          >
            Fecha
          </label>
          <input 
            id="date" 
            type="date" 
            onChange={this.setDate} 
            className="date-input"
          />
          
          <label className="state-label">Estado</label>
          
          <fieldset className="state-input1-wrapper">
            <input 
              id="state1" 
              type="radio" 
              name="state" 
              value=":)" 
              onChange={this.setMood} 
              className="state-input1"
            />
            <label 
              htmlFor="state1" 
              className="state-label1"
            >
              :)
            </label>
          </fieldset>
          
          <fieldset 
            className="state-input2-wrapper"
          >
            <input 
              id="state2" 
              type="radio" 
              name="state" 
              value=":(" 
              onChange={this.setMood} 
              className="state-input2"
            />
            <label 
              htmlFor="state2"
              className="state-label2"
            >
              :(
            </label>
          </fieldset>
          
           {/* Muestra el input del mensaje si "mood" es ":)"  */}
          {this.state.mood === ':)' && 
            <div>
              <label htmlFor="message">Mensaje</label>
              <input 
                id="message" 
                type="text" 
                onChange={this.setMessage}
                className="message-input"
              />
            </div>
          }

          <input 
            type="submit" 
            value="GUARDAR" 
            onClick={this.saveData} 
            className="save-button"
          />
        </form>

        <button 
          onClick={this.props.togglePopup} 
          className="cancel-button"
        >
          Cancelar
        </button>
      </div>
    )
  }
}
export default Form;