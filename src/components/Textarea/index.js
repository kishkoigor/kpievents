import React, { Component } from 'react';
import './index.css';

class Textarea extends Component{
  static defaultProps = {value:'',placeholder:'',description:''};
  state={value:''};

  render(){
    const data = this.props.data;
    let value = this.props.value;
    return(
      <div className={'textareaContainer' + (this.props.className ? ' ' + this.props.className : '')}>
        <div className={'textarea' + (this.state.active ? ' ' + 'activeInput' : '')+(this.props.error ? ' ' + 'error' : '')}>
          <div className='textareaValue'>
            <textarea
              onChange={(e)=>this.props.onChange(e.target.value, this.props.param)}
              className={this.props.error ? 'error' : ''}
              placeholder={this.props.placeholder}
              value={value}
            >value</textarea>
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

export default Textarea