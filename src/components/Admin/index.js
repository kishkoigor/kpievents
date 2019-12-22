import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import "./index.css"

import * as ROUTES from "../../constants/routes";
import Input from "../Input";
import Button from "../Button";
import Textarea from "../Textarea";

const INITIAL_STATE = {
  title: '',
  longtitle: '',
  description: '',
  datetime: new Date(),
};

class AdminBase extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(value, param){
    this.setState({[param]:value})
  }

  pickDateTime = date => {
    this.setState({
      datetime: date
    });
  };


  addNewEvent = (title, longtitle, description, datetime) => {
    const removeTime = (datetime) => {
      datetime.setHours(0);
      datetime.setMinutes(0);
      datetime.setSeconds(0);
      datetime.setMilliseconds(0);

      return datetime.valueOf()
    };

    const key = removeTime(datetime);

    const path = this.props.firebase.db.ref('events').child(key).push();

    path.set({
      title,
      longtitle,
      description,
      datetime: datetime.toString(),
    }).then(() => {
      console.log('added new event');
      console.log(datetime);
    }).catch((error) => {
      console.log('something went wrong');
      console.log(error);
    })

  };

  // onSubmit = event => {
  //   const { email, password } = this.state;
  //
  //   this.props.firebase
  //     .doSignInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       this.setState({ ...INITIAL_STATE });
  //       this.props.history.push(ROUTES.SIGN_IN);
  //     })
  //     .catch(error => {
  //       this.setState({ error });
  //     });
  //
  //   event.preventDefault();
  // };

  render() {
    return (
      <div>
        <div className="eventForm">

          <h1 className='eventFormHeading'>Додати подію</h1>

          <Input
            placeholder="Краткий заголовок"
          />

          <Input
            placeholder="Расширенный заголовок"
          />

          <Textarea placeholder="Описание"/>

          <DatePicker
            selected={this.state.datetime}
            onChange={this.pickDateTime}
            dateFormat="MMMM d, yyyy h:mm"
            minDate={this.state.datetime}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Время"
            inline
            calendarClassName="eventsDatePicker"
          />

          <Button placeholder="Сохранить" />
        </div>
        <div>

        </div>
      </div>
    );
  }
}

const Admin = compose(
  withRouter,
  withFirebase,
)(AdminBase);

export default Admin;

