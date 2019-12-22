import './index.css';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Button extends Component{

  constructor(props){
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(){
    this.props.onClick();
  }

  static defaultProps={
    onClick: () => console.log('click'),
    linkTo: '#',
    className: ''
  };

  render(){
    return(
      <Link
        to={this.props.linkTo}

        className={
          this.props.className + ' '
          + 'button' + ' '
          + (this.props.alignCenter ? 'alignCenter' + ' ' : '')
          + (this.props.warning ? 'warning' : '')
        }

        onClick={this.onClickHandler}
      >

        {
          this.props.svg ?
            <this.props.svg />
            :
            null
        }

        {this.props.caption}

      </Link>
    );
  }
}

export default Button