import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class Admin extends Component {

  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div>
        Admin
        <br/> <br/>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat="MMMM d, yyyy h:mm"
          minDate={this.state.startDate}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Время"
        />
        <br/> <br/>
        <input type="text" placeholder="Заголовок" />
        <br/> <br/>
        <textarea placeholder="Описание"/>
      </div>
    );
  }
}

