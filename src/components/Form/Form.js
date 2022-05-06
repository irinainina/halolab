import React, {Component} from 'react';
import './Form.css';

class Form extends Component {

  state = {
    name: '',
    phone: '',
    nameError: '',
    phoneError: ''
  }

  getName = (event) => {
    this.setState({
      name: event.target.value
     })
  }

  getPhone = (event) => {
    this.setState({
      phone: event.target.value
     })
  }

  blurName = (event) => {
    this.setState({
      name: event.target.value
     })
     this.validName();
  }

  blurPhone = (event) => {
    this.setState({
      phone: event.target.value
     })
     this.validPhone();
  }

  validName() {
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
    }
  }

  validPhone() {
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
    }
  }

  focusName = () => {
    this.setState({
      name: '',
      nameError: ''
    });
  }

  focusPhone = () => {
    this.setState({
      phone: '',
      phoneError: ''
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.validName();
    this.validPhone();
    if(!this.state.nameError && !this.state.phoneError) {
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
        value={this.state.name}
        onChange={this.getName}
        onBlur={this.blurName}
        onFocus={this.focusName} />
        <label htmlFor="name-input">{this.state.nameError}</label>
        
        <input type="tel"
        className={this.state.phoneError ? "input input-error" : "input"}
        id="phone-input"
        placeholder="Number"
        value={this.state.phone}
        onChange={this.getPhone}
        onBlur={this.blurPhone}
        onFocus={this.focusPhone} />
        <label htmlFor="phone-input">{this.state.phoneError}</label>

        <button type="submit" className="order-btn">Order<span className="arrow-right"></span></button>
      </form>
    );
  }
};

export default Form;