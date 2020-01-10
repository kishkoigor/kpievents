import React, { Component } from 'react';

import "./index.css"
import {compose} from "recompose";
import {withFirebase} from "../Firebase";
import logo from './logo.png'

class MainBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      weekeventlist: [],
      isLoaded: false,
    };

    this.isClickedHandler = this.isClickedHandler.bind(this);
  }

  componentDidMount() {


    const date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);

        this.props.firebase.db
          .ref('events')
          .orderByKey()
          .startAt(date.valueOf() + '')
          .limitToFirst(7)
          .once('value')
          .then((item) => {

            const buffer = Object.values(item.val());
            let weekeventlist = [];
            buffer.map((value, key) => {
              weekeventlist[key] = Object.values(value);
            });

            this.setState({
              weekeventlist: weekeventlist,
              isLoaded: true,
            });
          })
          .catch((err) => {
            console.log(err);
      })

  }

  isClickedHandler = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });

  };

  render() {

    if(this.state.isLoaded){
      return(
        <div className="MainPage">

          {
            this.state.isClicked ? null :
              <div className='Day' style={{order: 3}}>
                <img className='logo' src={logo}/>
              </div>
          }

          {
              this.state.weekeventlist.map( (item, i) => {
                return(
                  <Day
                    eventlist={item}
                    key={i}
                    order={i}
                    onClick={this.isClickedHandler}
                    locked={this.state.isClicked}
                  />
                )
              })
          }

        </div>
      )
    }
      else {
        return (
          <div>
            <p>Почекай декілька секунд</p>
          </div>
        )
    }


  }
}

class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {
      extended: false,
      choosedEventKey: 0,
    }

  };

  onClickHandler = () => {
    if(!this.props.locked){
      this.setState({
        extended: !this.state.extended,
      });
    }
  };


  weekdayshortcutlist = ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'];

  // eventdatetime = this.props.eventlist[this.state.choosedEvent].eventdatetime;
  // timestring = this.props.eventlist[this.state.choosedEvent].eventdatetime.getHours() + ':' + this.props.eventlist[this.state.choosedEvent].eventdatetime.getMinutes();
  // weekdayshortcut =  this.weekdayshortcutlist[this.props.datetime.getDay()];
  // eventdate = this.props.datetime.getDate() + '.' + this.props.datetime.getMonth();

  getLongTitle = () => {
    return this.props.eventlist[this.state.choosedEventKey].longtitle;
  };

  getEventDateTime = () => {
    if (typeof this.props.eventlist[this.state.choosedEventKey].datetime === 'string'){
      return new Date(this.props.eventlist[this.state.choosedEventKey].datetime)
    }
    else {
      return this.props.eventlist[this.state.choosedEventKey].datetime
    }
  };

  render() {
    

    return(
      <div onClick={ this.state.extended ?  ()=>{this.onClickHandler(); if(!this.props.locked){ this.props.onClick();}} : ()=>{} } className={'Day' + (this.state.extended ? ' ' + 'DayExtended' : '')} style={{order: this.props.order}} >
        <div className={this.state.extended ? 'DayHeaderExtended' : 'DayHeader'}>
          <div className='weekday'>
            {this.weekdayshortcutlist[this.getEventDateTime().getDay()]}

          </div>
          <div className='date'>
            {this.getEventDateTime().getDate().toString().padStart(2, '0') + '.' + (this.getEventDateTime().getMonth() + 1).toString().toString().padStart(2, '0')}
          </div>
        </div>

        {this.state.extended ? null :
          <div className='eventList'>

            {

              this.props.eventlist.map((item, i) => {
                return (
                  <div onClick={()=>{this.onClickHandler(); this.setState({choosedEventKey: i}); if(!this.props.locked){ this.props.onClick();}}} className='eventListItem' key={i}>
                    {item.title}
                  </div>
                );
              })

              // console.log(Object.values(this.props.eventlist))

            }

          </div>
        }

        {this.state.extended ?
          <div className='eventProfile'>
            <div className='eventProfileLongtitle'>
              {this.getLongTitle()}
            </div>
            <div className='eventProfileDescription'>
              {this.props.eventlist[this.state.choosedEventKey].description}
            </div>
          </div> : null
        }

        {this.state.extended ?
          <div className='serviceicons'>
            <svg
              onClick={()=>{this.onClickHandler(); this.props.onClick(); this.setState({extended: false})}}
              className='exitbutton'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
            >
              <path fill='currentColor' d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z' />
            </svg>

            <div className='eventTime' onClick={this.test}>
              {this.getEventDateTime().getHours().toString().padStart(2, '0') + ':' + this.getEventDateTime().getMinutes().toString().padStart(2, '0')}
            </div>
          </div> : null
        }
      </div>
    )
  }
}

export { Day }

const Main = compose(withFirebase)(MainBase);

export default Main