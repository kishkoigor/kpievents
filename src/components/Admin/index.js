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
import {Day} from "../Main";

  const INITIAL_STATE = {
    title: '',
    longtitle: '',
    description: '',
    eventdatetime: new Date(),
  }

class AdminBase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(value, param){
    this.setState({[param]:value})
  }

  pickDateTime = date => {
    this.setState({
      eventdatetime: date
    });
  };

  test = () => {
    console.log(this.state.title)
  };

  addNewEvent = () => {
    const removeTime = (datetime) => {
      datetime.setHours(0);
      datetime.setMinutes(0);
      datetime.setSeconds(0);
      datetime.setMilliseconds(0);

      return datetime.valueOf()
    };

    const key = removeTime(new Date(this.state.eventdatetime.getTime()));
    console.log(this.state.eventdatetime.getTime());
    console.log(key);

    const path = this.props.firebase.db.ref('events').child(key).push();

    path.set({
      title: this.state.title,
      longtitle: this.state.longtitle,
      description: this.state.description,
      datetime: this.state.eventdatetime.toString(),
    }).then(() => {
      console.log('added new event');
      this.setState({
        ...INITIAL_STATE
      })

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
      <div className='addEventForm'>
        <div className="addEventFormContainer">

          <h1 className='eventFormHeading'>Додати подію</h1>

          <Input
            placeholder="Короткий заголовок"
            value={this.state.title}
            onChange={this.onChangeHandler}
            param='title'
          />

          <Input
            placeholder="Розширений заголовок"
            value={this.state.longtitle}
            onChange={this.onChangeHandler}
            param='longtitle'
          />

          <Textarea
            placeholder="Опис"
            value={this.state.description}
            onChange={this.onChangeHandler}
            param='description'
          />


            <DatePicker
              selected={this.state.eventdatetime}
              onChange={this.pickDateTime}
              dateFormat="MMMM d, yyyy h:mm"
              minDate={new Date()}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              inline
            />


        </div>
        <div className='addEventFormContainer'>

          <Day
            eventlist={[{...this.state}]}
            extended
            testing
            locked={false}
            onClick={()=>{}}
          />

          <Button className='submitEventFormButton' onClick={this.addNewEvent} placeholder='Зберегти подію' />
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

