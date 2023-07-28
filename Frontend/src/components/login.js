import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setEmail, setPass, setName } from './action';
import './login.css';

import './store';

const styles = 
{
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  login: {
    width: '400px',
    padding: '40px',
    borderRadius: '4px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '30%',
    padding: '10px',
    fontSize: '16px',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft:'140px',
  },
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#333',
  },
};


function Login({
  email,
  pass,
  name,
  setEmail,
  setName,
  setPass,
}) {
  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8181/api/v1/auth/authenticate',
        {
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));
      const user = {
        email,
      };

      navigate('/home');
    } catch (error) {
      console.log(error);
      window.alert('Invalid Credentials');
    }
  };

  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);
  return (
    <div  className="forbg">
    
    <div className='loginmain'>
      
      <div style={styles.login}>
       
        <form onSubmit={check}>
        <center>
        <div className='img' >
      <img align="right" src="https://img.freepik.com/premium-vector/boy-character-doing-domestic-work-cleaning-floor-baby-clean-carpet-child-helper-vacuuming-home-with-vacuum-cleaner-living-room-every-day-routine-weekend-chores-cartoon-vector-illustration_1016-11293.jpg?w=2000" width="500" height="650"></img></div>
          <h2 style={styles.title}>Login</h2>
         
          <div style={styles.formGroup}>
            <center>
            
          </center> 
            <input
              style={{height:'37px',width:'100%',fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',}} 
 
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
            style={{height:'37px',width:'100%',fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',}} 

              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button style={{marginLeft:'10%'}} type="submit">
            Login
          </button>
          {checkpass && alert('Successful login ' + name)}
          {checkpass && navigate('/home')}
          <Link to="/signup" style={styles.registerLink}>
            Don't have an account? Register
          </Link>
          </center>
        </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);