import React, { Component } from 'react';
import './index.css';

class Input extends Component{
  static defaultProps = {value:'',placeholder:'',description:''};
  state={value:''};

  render(){
    const data = this.props.data;
    let value = this.props.value;
    return(
      <div className={'inputContainer' + (this.props.className ? ' ' + this.props.className : '')}>
        <div className={'input' + (this.state.active ? ' ' + 'activeInput' : '')+(this.props.error ? ' ' + 'error' : '')}>
          <div className='inputValue'>
            <input type={this.props.type ? this.props.type : 'text'}
              // onFocus={()=>{this.setActive(true)}}
              // onBlur={()=>{if(!this.state.hover){this.setActive(false)}}}
              onChange={(e)=>this.props.onChange(e.target.value, this.props.param)}
              className={this.props.error ? 'error' : ''}
              placeholder={this.props.placeholder}
              value={value}
            />
          </div>
        </div>
        <div className={'description'}>{(this.state.value !== '') ? this.props.description : null}</div>
        {this.props.error ?
          <div className={'errorDescription'}>{this.props.error}</div>
          :
          null
        }
      </div>
    )
  }

}

export default Input