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
     console.log(this.state.name)
  }

  blurPhone = (event) => {
    this.setState({
      name: event.target.value
     })
     this.validPhone();
     console.log(this.state.phone)
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name, this.state.phone)
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

  render() {
    return (
      <form action="#"
      onSubmit={this.onSubmit}>
        
        <input type="text" 
        className={this.state.nameError ? "input input-error" : "input"}
        id="name-input"
        placeholder="Name" 
        onChange={this.getName}
        onBlur={this.blurName} />
        <label htmlFor="name-input">{this.state.nameError}</label>
        
        <input type="tel"
        className={this.state.phoneError ? "input input-error" : "input"}
        id="phone-input"
        placeholder="Number" 
        onChange={this.getPhone}
        onBlur={this.blurPhone} />
        <label htmlFor="phone-input">{this.state.phoneError}</label>

        <button type="submit" className="order-btn">Order</button>
      </form>
    );
  }
};

export default Form;