import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
//use reactstrap to create popover to check that information is correct before submitting
import './RegisterPage.css'

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      username: '',
      password: '',
      password2: '',
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      email: '',
      phone: '',

    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }


  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password === this.state.password2) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          address1: this.state.address1,
          address2: this.state.address2,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip,
          country: this.state.country,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phone: this.state.phone,
          email: this.state.email,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  
  
  render() {
    return (
      <div className="mainDiv">
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}

        <form onSubmit={this.registerUser}>
          <h1>Lets Get Started!</h1>
          <h2>Please enter your information</h2>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                placeholder="Password"
                minLength="8"
                title="All passwords must be at least 8 characters long"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password2">
            
              <input
                type="password"
                placeholder="Re-enter your password"
                value={this.state.password2}
                onChange={this.handleInputChangeFor('password2')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="first">
              First Name:
              <input
                type="text"
                id="first"
                value={this.state.firstName}
                onChange={this.handleInputChangeFor('firstName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="last">
              Last Name:
              <input
                type="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChangeFor('lastName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Phone Number:
              <input
                type="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChangeFor('phone')}
              />
            </label>

          </div>
          <div>
            <label htmlFor="address1">
              Address 1:
              <input
                type="address"
                name="address1"
                value={this.state.address1}
                onChange={this.handleInputChangeFor('address1')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="address2">
              Address 2:
              <input
                type="address"
                name="address2"
                value={this.state.address2}
                onChange={this.handleInputChangeFor('address2')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="city">
              City:
              <input
                type="address"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChangeFor('city')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="zip">
              Zip Code:
              <input
                type="address"
                name="zip"
                value={this.state.zip}
                onChange={this.handleInputChangeFor('zip')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="state">
              State:
              <input
                type="address"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChangeFor('state')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="country">
              Country:
              <input
                type="address"
                name="country"
                value={this.state.country}
                onChange={this.handleInputChangeFor('country')}
              />
            </label>
          </div>
          <div id="popoverDiv" >
            <Button type="button" id="Popover1" disabled={!this.state.username || !this.state.password || !this.state.password2} onClick={this.confirm}>Submit</Button>
            <Popover position="relative" size= "500px" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
              <PopoverHeader>Please Confirm the following information is correct</PopoverHeader>
              <PopoverBody>Username: {this.state.username} 
              <br />
              Email: {this.state.email}
              <br />
              Phone: {this.state.phone}
              <br />
              Address: 
              <br />{this.state.address1}
              
              {this.state.address2}
              <br />
              {this.state.city}
              <br /> 
              {this.state.zip}
              <br />
              {this.state.country}
              <br />
              
                <div>
                  <input
                    className="register"
                    type="submit"
                    name="submit"
                    value="Register"
                    onClick={this.registerUser}
                  />
                </div>
                <button className="exitButton" onClick={this.toggle}>X</button>
              </PopoverBody>
            </Popover>
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

