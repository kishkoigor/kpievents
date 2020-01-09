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
    };

    this.isClickedHandler = this.isClickedHandler.bind(this);
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

  isClickedHandler = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });

  };

  render() {

    return(
      <div className="MainPage">
        <Day
          eventlist={{
            test: {
              eventdatetime: new Date(2019, 11,23),
              title: 'Якийсь класний івент з дуже коротким заголовком',
              longtitle: 'Якийсь класний івент з дуже коротким заголовком, але трохи довшим',
              description: 'Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший'

            }
          }}
          onClick={this.isClickedHandler}
          locked={this.state.isClicked}
        />
        <Day
          eventlist={{
            test: {
              eventdatetime: new Date(2019, 11,24,12, 15),
              title: 'Якийсь класний івент з дуже коротким заголовком',
              longtitle: 'Якийсь класний івент з дуже коротким заголовком, але трохи довшим',
              description: 'Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший'
            }
          }}
          onClick={this.isClickedHandler}
          locked={this.state.isClicked}
        />
        <Day
          eventlist={{
            test: {
              eventdatetime: new Date(2019, 11,25, 12, 15),
              title: 'Якийсь класний івент з дуже коротким заголовком',
              longtitle: 'Якийсь класний івент з дуже коротким заголовком, але трохи довшим',
              description: 'Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший'
            }
          }}
          onClick={this.isClickedHandler}
          locked={this.state.isClicked}
        />
        {
          this.state.isClicked ? null :
            <div className='Day'>
              <img className='logo' src={logo}/>
            </div>
        }


        <Day
          eventlist={{
            test: {
              eventdatetime: new Date(2019, 11,26,12, 15),
              title: 'Якийсь класний івент з дуже коротким заголовком',
              longtitle: 'Якийсь класний івент з дуже коротким заголовком, але трохи довшим',
              description: 'Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший'

            }
          }}
          onClick={this.isClickedHandler}
          locked={this.state.isClicked}
        />

        <Day
          eventlist={{
            test: {
              eventdatetime: new Date(2019, 11,27, 12, 15),
              title: 'Якийсь класний івент з дуже коротким заголовком',
              longtitle: 'Якийсь класний івент з дуже коротким заголовком, але трохи довшим',
              description: 'Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший'

            }
          }}
          onClick={this.isClickedHandler}
          locked={this.state.isClicked}
        />
        <Day
          eventlist={{
            test: {
              eventdatetime: new Date(2019, 11,28, 12, 15),
              title: 'Якийсь класний івент з дуже коротким заголовком',
              longtitle: 'Якийсь класний івент з дуже коротким заголовком, але трохи довшим',
              description: 'Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший'

            }
          }}
          onClick={this.isClickedHandler}
          locked={this.state.isClicked}
        />
        <Day
          eventlist={{
            test: {
              eventdatetime: new Date(2019, 11,29, 12, 15),
              title: 'Якийсь класний івент з дуже коротким заголовком',
              longtitle: 'Якийсь класний івент з дуже коротким заголовком, але трохи довшим',
              description: 'Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший. Якийсь класний текст з дуже зрозумілим змістом, але трохи цікаіший'

            }
          }}
          onClick={this.isClickedHandler}
          locked={this.state.isClicked}
        />
      </div>
    )
  }
}

class Day extends Component {

  static defaultProps = {
    testing: false,
    datetime: new Date(),
    eventlist: [{
      title: (<span color='red'> Тут повинен бути заголовок </span>),
      longtitle: 'Тут повинен бути розширений заголовок',
      description: 'Тут повинно бути повинен бути корткий але чіткий опис івенту. Важливо, аби він був зрозумілий, але уміщався у колонку.',
      eventdatetime: new Date(),
    }],
    extended: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      extended: false,
      choosedEventKey: 0,
    }

  };

  // test = () => {
  //   console.log(this.props.eventlist[this.state.choosedEventKey]);
  //   console.log(this.state.choosedEvent);
  // };

  onClickHandler = () => {
    if(!this.props.locked){
      this.setState({
        extended: !this.state.extended,
      });
    }
  };

  eventlist = Object.values(this.props.eventlist);

  weekdayshortcutlist = ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'];

  // eventdatetime = this.props.eventlist[this.state.choosedEvent].eventdatetime;
  // timestring = this.props.eventlist[this.state.choosedEvent].eventdatetime.getHours() + ':' + this.props.eventlist[this.state.choosedEvent].eventdatetime.getMinutes();
  // weekdayshortcut =  this.weekdayshortcutlist[this.props.datetime.getDay()];
  // eventdate = this.props.datetime.getDate() + '.' + this.props.datetime.getMonth();

  render() {
    

    return(
      <div onClick={ this.state.extended ?  ()=>{this.onClickHandler(); if(!this.props.locked){ this.props.onClick();}} : ()=>{} } className={'Day' + (this.state.extended ? ' ' + 'DayExtended' : '')}>
        <div className={this.state.extended ? 'DayHeaderExtended' : 'DayHeader'}>
          <div className='weekday'>

            {this.weekdayshortcutlist[this.props.eventlist[this.state.choosedEventKey].eventdatetime.getDay()]}

          </div>
          <div className='date'>
            {this.props.eventlist[this.state.choosedEventKey].eventdatetime.getDate().toString().padStart(2, '0') + '.' + (this.props.eventlist[this.state.choosedEventKey].eventdatetime.getMonth() + 1).toString().toString().padStart(2, '0')}
          </div>
        </div>

        {this.state.extended ? null :
          <div className='eventList'>

            {

              this.props.eventlist.map((item, i) => {
                return (
                  <div onClick={()=>{this.onClickHandler(); if(!this.props.locked){ this.props.onClick();}}} className='eventListItem' key={i}>
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
              {this.props.eventlist[this.state.choosedEventKey].longtitle}
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
              {this.props.eventlist[this.state.choosedEventKey].eventdatetime.getHours().toString().padStart(2, '0') + ':' + this.props.eventlist[this.state.choosedEventKey].eventdatetime.getMinutes().toString().padStart(2, '0')}
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