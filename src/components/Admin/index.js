import React, { Component } from 'react';
import DateTimePicker from "react-datetime-picker/src/DateTimePicker";

export default class Admin extends Component {

  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        Admin
        <DateTimePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

