
import React from 'react';
import Button from './Button';

export default class UserInput extends React.Component {

  getElement() {
    return document.getElementById('user-input');
  }

  submitCallBack(e) {
    e.preventDefault();
    this.props.getInputFromChild(this.getElement().value);
    this.getElement().value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => { this.submitCallBack(e) }} >
          <input id='user-input' type="text" name='numberInput' />
          <Button type={'submit'} value={this.props.buttonValue} />
        </form>
      </div >
    )
  }
}