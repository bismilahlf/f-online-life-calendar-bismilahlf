import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div>
        <form action="" method="post">
          <label htmlFor="date">Fecha</label>
          <input id="date" type="date"/>
          
          <label htmlFor="state1">Estado</label>
          <input id="state1" type="radio" name="state" value="goodday"/>
          <label htmlFor="state2"></label>
          <input id="state2" type="radio" name="state" value="badday"/>
          
          <label htmlFor="message">Mensaje</label>
          <input id="message" type="text"/>

          <input type="submit" value="GUARDAR"/>
        </form>

        <button onClick={this.props.togglePopup}>Cancelar</button>
      </div>
    )
  }
}
export default Form;