import React, { Component } from 'react';

import "./index.css"
import {compose} from "recompose";
import {withFirebase} from "../Firebase";

class MainBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
    }
  }

  componentDidMount() {
      this.props.firebase.db
        .ref('events')
        .once('value')
        .then((eventlist) => {
          this.setState({
            eventlist: eventlist.val(),
          })
        })
  }

  render() {

    return(
      <div className="MainPage">

      </div>
    )
  }
}

class Day extends Component {

  static defaultProps = {
    testing: false,
    datetime: new Date(),
    eventlist: {
      test: {
        title: (<span color='red'> Тут повинен бути заголовок </span>),
        longtitle: 'Тут повинен бути розширений заголовок',
        description: 'Тут повинно бути повинен бути корткий але чіткий опис івенту. Важливо, аби він був зрозумілий, але не уміщався у колонку.',
        eventdatetime: new Date(),
      },
    },
    extended: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      extended: false,
      choosedEvent: Object.keys(this.props.eventlist)[0],
    }

  };

  test = () => {
    console.log(this.props.eventlist[this.state.choosedEvent]);
    console.log(this.state.choosedEvent);
  };

  weekdayshortcutlist = ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'];

  // eventdatetime = this.props.eventlist[this.state.choosedEvent].eventdatetime;
  // timestring = this.props.eventlist[this.state.choosedEvent].eventdatetime.getHours() + ':' + this.props.eventlist[this.state.choosedEvent].eventdatetime.getMinutes();
  // weekdayshortcut =  this.weekdayshortcutlist[this.props.datetime.getDay()];
  // eventdate = this.props.datetime.getDate() + '.' + this.props.datetime.getMonth();

  render() {
    

    return(
      <div className={'Day' + (this.props.extended ? ' ' + 'DayExtended' : '')}>
        <div className={this.props.extended ? 'DayHeaderExtended' : 'DayHeader'}>
          <div className='weekday'>

            {this.weekdayshortcutlist[this.props.eventlist[this.state.choosedEvent].eventdatetime.getDay()]}

          </div>
          <div className='date'>
            {this.props.eventlist[this.state.choosedEvent].eventdatetime.getDate() + '.' + this.props.eventlist[this.state.choosedEvent].eventdatetime.getMonth()}
          </div>
        </div>

        {this.props.extended ? null :
          <div className='eventList'>
            <div className='eventListItem'>
              Якийсь класний івент з дуже коротким заголовком
            </div>
            <div className='eventListItem'>
              Якийсь класний івент з дуже коротким заголовком
            </div>
            <div className='eventListItem'>
              Якийсь класний івент з дуже коротким заголовком
            </div>
            <div className='eventListItem'>
              Якийсь класний івент з дуже коротким заголовком
            </div>
          </div>
        }

        {this.props.extended ?
          <div className='eventProfile'>
            <div className='eventProfileLongtitle'>
              {this.props.eventlist[this.state.choosedEvent].longtitle}
            </div>
            <div className='eventProfileDescription'>
              {this.props.eventlist[this.state.choosedEvent].description}
            </div>
          </div> : null
        }

        {this.props.extended ?
          <div className='serviceicons'>
            <svg
              className='exitbutton'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
            >
              <path fill='currentColor' d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z' />
            </svg>

            <div className='eventTime' onClick={this.test}>
              {this.props.eventlist[this.state.choosedEvent].eventdatetime.getHours() + ':' + this.props.eventlist[this.state.choosedEvent].eventdatetime.getMinutes()}
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