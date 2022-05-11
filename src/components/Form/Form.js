import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    name: '',
    phone: '',
    nameError: '',
    phoneError: '',
  };

  getName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  getPhone = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  blurName = (event) => {
    this.setState({
      name: event.target.value,
    });
    this.validName();
  };

  blurPhone = (event) => {
    this.setState({
      phone: event.target.value,
    });
    this.validPhone();
  };

  validName() {
    let isValidName = false;
    const name = this.state.name;
    if (name === '') {
      this.setState({
        nameError: 'This field in required',
      });
    } else if (!name.match(/[a-zа-я]/gi)) {
      this.setState({
        nameError: 'Only letters allowed',
      });
    } else {
      this.setState({
        nameError: '',
      });
      isValidName = true;
    }
    return isValidName;
  }

  validPhone() {
    let isValidFhone = false;
    const phone = this.state.phone;
    if (phone === '') {
      this.setState({
        phoneError: 'This field in required',
      });
    } else if (!phone.match(/[0-9]/gi)) {
      this.setState({
        phoneError: 'Only numbers allowed',
      });
    } else if (phone.length !== 12) {
      this.setState({
        phoneError: 'Should contain 12 characters',
      });
    } else {
      this.setState({
        phoneError: '',
      });
      isValidFhone = true;
    }
    return isValidFhone;
  }

  focusInput = (event) => {
    this.setState({
      [event.target.name]: '',
      [`${event.target.name}Error`]: '',
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.validName();
    this.validPhone();
    if (!this.validName() && !this.validPhone()) return;

    const url = 'https://tests-rs.herokuapp.com/add-user';
    const name = this.state.name;
    const number = this.state.phone;
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ name, number }),
    });

    const result = await response.json();
    console.log(` name: ${result.name}\n phone: ${result.number}`);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className={this.state.nameError ? 'input input-error' : 'input'}
          id="name-input"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.getName}
          onBlur={this.blurName}
          onFocus={this.focusName}
        />
        <label htmlFor="name-input">{this.state.nameError}</label>

        <input
          type="tel"
          className={this.state.phoneError ? 'input input-error' : 'input'}
          id="phone-input"
          name="phone"
          placeholder="Number"
          value={this.state.phone}
          onChange={this.getPhone}
          onBlur={this.blurPhone}
          onFocus={this.focusPhone}
        />
        <label htmlFor="phone-input">{this.state.phoneError}</label>

        <button type="submit" className="order-btn">
          Order<span className="arrow-right"></span>
        </button>
      </form>
    );
  }
}

export default Form;
