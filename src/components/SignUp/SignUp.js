import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      error: {
        username: '',
        email: '',
        password: '',
        confirmPasswrod: '',
      }
    };
    
    this.username = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.confirmPasswrod = React.createRef();
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  submit = (e) => {
    e.preventDefault();
    if (this.usernameChange(this.username.current.value) && this.emailChange(this.email.current.value) && this.passwordChange(this.password.current.value) && this.confirmPasswrodChange(this.confirmPasswrod.current.value)) {

      let formData = {
        username: this.username.current.value,
        email: this.email.current.value,
        password: this.password.current.value,
        confirmPasswrod: this.confirmPasswrod.current.value
      }
      console.log(formData);
      fetch('http://localhost:3000/signup/', {
        method: 'POST',
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(response => {
          alert('Data saved.');
        });

    }
  };

  usernameChange = (value) => {
    let error = '';

    if (value) {
      if (value.length < 8) {
        error = 'Username must be minimum 8 character long';
      } else if (value.indexOf(' ') != -1) {
        error = "Username must not have spaces.";
      } else {
        error = '';
      }
    } else {
      error = 'Please write Username.';
    }
    this.setState({ ...this.state, error: { ...this.state.error, username: error } });
    if (error == '') {
      return true;
    } else {
      return false;
    }
  }

  emailChange = (value) => {
    let error = '';
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value) {
      if (emailReg.test(value)) {
        error = '';
      } else {
        error = 'Invalid Email Id.';
      }
    } else {
      error = 'Please write email.';
    }

    this.setState({ ...this.state, error: { ...this.state.error, email: error } });
    if (error == '') {
      return true;
    } else {
      return false;
    }
  }

  passwordChange = (value) => {
    let error = '';
    const passReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (value) {
      if (passReg.test(value)) {
        error = '';
      } else {
        error = 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:';
      }
    } else {
      error = 'Please write Password.';
    }
    this.setState({ ...this.state, error: { ...this.state.error, password: error } });
    if (error == '') {
      return true;
    } else {
      return false;
    }
  }

  confirmPasswrodChange = (value) => {
    let error = '';

    if (value != this.password.current.value) {
      error = 'Password and Cofirm Password does not match.';
      this.setState({ ...this.state, error: { ...this.state.error, confirmPasswrod: error } });
      return false;
    } else {
      this.setState({ ...this.state, error: { ...this.state.error, confirmPasswrod: '' } });
      return true;
    }
  }

  render() {
    if (this.state.loading) {
      return (<p>Loading please wait!</p>);
    }

    return (
      <div className="container" style={{ textAlign: 'left' }}>
        <form className="form-horizontal">
          <fieldset>
            <div id="legend">
              <legend className="">Register</legend>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="username">Username</label>
              <div className="controls">
                <input type="text" ref={this.username} onChange={(e) => this.usernameChange(this.username.current.value)} id="username" name="username" placeholder="" className="input-xlarge" />
                {this.state.error.username ? <p className="help-block">{this.state.error.username}</p> : ''}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="email">E-mail</label>
              <div className="controls">
                <input type="text" ref={this.email} onChange={(e) => this.emailChange(this.email.current.value)} id="email" name="email" placeholder="" className="input-xlarge" />
                {this.state.error.email ? <p className="help-block">{this.state.error.email}</p> : ''}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="password">Password</label>
              <div className="controls">
                <input type="password" ref={this.password} onChange={(e) => this.passwordChange(this.password.current.value)} id="password" name="password" placeholder="" className="input-xlarge" />
                {this.state.error.password ? <p className="help-block">{this.state.error.password}</p> : ''}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="password_confirm">Password (Confirm)</label>
              <div className="controls">
                <input type="password" ref={this.confirmPasswrod} onChange={(e) => this.confirmPasswrodChange(this.confirmPasswrod.current.value)} id="password_confirm" name="password_confirm" placeholder="" className="input-xlarge" />
                {this.state.error.confirmPasswrod ? <p className="help-block">{this.state.error.confirmPasswrod}</p> : ''}
              </div>
            </div>

            <div className="control-group">
              <div className="controls">
                <button onClick={(e) => this.submit(e)} className="btn btn-success">Register</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }


}

export default SignUp;