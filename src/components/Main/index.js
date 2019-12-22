import React, { Component } from 'react';

// import "./index.css"

import Input from "../Input";
import Button from "../Button";
import Textarea from "../Textarea";

class Main extends Component {


  constructor(props) {
    super(props);
    this.state = {
      title: 'fdssdf',
      descr: 'gfdsa',
    };
  }


  render() {
    return (
      <div>

      <Day
        date={new Date()}
        title={this.state.title}
        descr={this.state.descr}
      />

      <Day
        date={new Date(1980)}
        title='title'
        descr='bgafsdjkd .mkffn,fandsk;;df'
      />

      </div>
    );
  }
}

class Day extends Component {

  static defaultProps = {title: 'errornotitle'};

  constructor(props) {
    super(props);

    this.state = {
      extended: false,
    };
  }
    render() {
      return (
        <div>

          <div className='date'>
            {this.props.date.toString()}
          </div>

          <div className='eventlist'>
            <h1> {this.props.title} </h1>
            <p> </p>
          </div>

        </div>
      )
    }

  }


export default Main;