import React, {Component} from 'react';
import './Form.css';

class Form extends Component {

  state = {
    name: '',
    phone: '',
    nameError: '',
    phoneError: ''
  }

  validName() {
    let isNameValid = false;
    const name = this.state.name;
    if(name === '') {
      this.setState({
        nameError: 'This field in required'
      });
    } else if (!name.match(/[a-zа-я]/ig)) {
      this.setState({
        nameError: 'Only letters allowed'
      }) ;
    } else {
      this.setState({
        nameError: ''
      });
      isNameValid = true;
    }
    return isNameValid
  }

  validPhone() {
    let isPhoneValid = false;
    const phone = this.state.phone;
    if(phone === '') {
      this.setState({
        phoneError: 'This field in required'
      });
    } else if (!phone.match(/[0-9]/ig)) {
      this.setState({
        phoneError: 'Only numbers allowed'
      });
    } else if (phone.length !== 12) {
      this.setState({
        phoneError: 'Should contain 12 characters'
      });
    } else {
      this.setState({
        phoneError: ''
      });
      isPhoneValid = true;
    }
    return isPhoneValid;
  }

  validInput(inputName) {
    if(inputName === 'name') {
      this.validName();
    }
    if(inputName === 'phone') {
      this.validPhone();
    }
    if(!inputName) {
      this.validName();
      this.validPhone();
    }
    return this.validName() && this.validPhone();
  }

  getInputValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value
     })
  }

  blurInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
     })
     this.validInput(event.target.name);
  }

  focusInput = (event) => {
    this.setState({
      [event.target.name]: '',
      [`${event.target.name}Error`]: ''
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.validInput();
    if(this.validInput()) {
      console.log(` name: ${this.state.name}\n phone: ${this.state.phone}`)
    }
  }

  render() {
    return (
      <form action="#" onSubmit={this.onSubmit}>        
        <input type="text" 
        className={this.state.nameError ? "input input-error" : "input"}
        id="name-input"
        placeholder="Name"
        name={"name"}
        value={this.state.name}        
        onChange={this.getInputValue}
        onBlur={this.blurInput}
        onFocus={this.focusInput} />
        <label htmlFor="name-input">{this.state.nameError}</label>
        
        <input type="tel"
        className={this.state.phoneError ? "input input-error" : "input"}
        id="phone-input"
        placeholder="Number"
        name={"phone"}
        value={this.state.phone}
        onChange={this.getInputValue}
        onBlur={this.blurInput}
        onFocus={this.focusInput} />
        <label htmlFor="phone-input">{this.state.phoneError}</label>

        <button type="submit" className="order-btn">Order<span className="arrow-right"></span></button>
      </form>
    );
  }
};

export default Form;