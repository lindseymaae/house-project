import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
//use reactstrap to create popover to check that information is correct before submitting
import './RegisterPage.css';
import TextInput from '../TextInput/TextInput';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false, username: '',
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
           <TextInput changer="username"
                label="Username"
                type="text"
                 />
          </div>
          <div>
              <TextInput changer="password"
                type="password"
                label="Password" 
               />
          </div>
          <div>
            <TextInput changer="password2"
              type="password"
              label="Confirm Password" />
          </div>
          <div>
            <TextInput changer="firstName"
              type="text"
              label="First Name" />
          </div>
          <div>
            <TextInput changer="lastName"
              type="text"
              label="Last Name" />
          </div>
          <div>
            <TextInput changer="email"
              type="text"
              label="Email" />
          </div>
          <div>
            <TextInput changer="phone"
              type="text"
              label="Phone Number" />
          </div>
          <div>
            <TextInput changer="address1"
              type="text"
              label="Address 1" />
          </div>
          <div>
            <TextInput changer="address2"
              type="text"
              label="Address 2" />
          </div>
          <div>
            <TextInput changer="city"
              type="text"
              label="City" />
          </div>
          <div>
            <TextInput changer="state"
              type="text"
              label="State" />
          </div>
          <div>
            <TextInput changer="country"
              type="text"
              label="Country" />
          </div>

          <Button type="button" id="Popover1" onClick={this.confirm}>Submit</Button>

          <div id="popoverDiv" >
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
                  <button
                    className="register"
                    type="submit"
                    name="submit"
                    value="Register"
                    onClick={this.registerUser}>Register</button>
                
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

