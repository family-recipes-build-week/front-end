import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import './auth.css';

class Signup extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = 'http://localhost:5000/api/auth/register';

    axios
      .post(endpoint, this.state)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        this.props.history.push('/login');
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className='authCont'>
        <div className='authCard'>
          <h2>Sign-Up</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              name='username'
              id='username'
              placeholder='Username:'
              value={this.state.username}
              onChange={this.handleInput}
            />
            <input
              name='password'
              id='password'
              placeholder='Password:'
              value={this.state.password}
              onChange={this.handleInput}
            />
            <button className='fadeBttn' type='submit'>Submit</button>
          </form>
        </div>
        <div>
          <p>Already have an account?</p>
          <Link to='/login'>
            <button className='fadeBttn'>Log-In Here!</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Signup;