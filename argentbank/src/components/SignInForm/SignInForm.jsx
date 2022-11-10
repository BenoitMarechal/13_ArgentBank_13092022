import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setUserEmail,
  setRemember,
  resetUser,
  setConnectedTrue,
  setFirstName,
  setLastName,
  setToken,
} from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const SignInhtmlForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function loginSubmit(e) {
    e.preventDefault();
    dispatch(resetUser());
    let userNameFormValue = document.getElementById('username').value;
    let passwordFormValue = document.getElementById('password').value;
    let loginBody = {
      email: userNameFormValue,

      password: passwordFormValue,
    };
    let loginUrl = 'http://localhost:3001/api/v1/user/login';

    fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(loginBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);

        if (data.body) {
          let currentToken = data.body.token;
          dispatch(setRemember());
          dispatch(setToken(currentToken));
          //////Should stop here
          dispatch(setConnectedTrue());
          let profileUrl = 'http://localhost:3001/api/v1/user/profile';
          fetch(profileUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + currentToken,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              dispatch(setUserEmail(data.body.email));
              dispatch(setFirstName(data.body.firstName));
              dispatch(setLastName(data.body.lastName));
              navigate('/profile');
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
        /////////////////////////////////
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <section className='sign-in-content'>
      <i className='fa fa-user-circle sign-in-icon'></i>
      <h1>Sign In</h1>
      <form>
        <div className='input-wrapper'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            //onChange={getEmail}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            //onChange={getPassword}
          />
        </div>
        <div className='input-remember'>
          <input
            type='checkbox'
            id='remember-me'
            //onClick={switchRemember}
          />
          <label htmlFor='remember-me'>Remember me</label>
        </div>
        {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
        {/* <a href='./user' className='sign-in-button'>
					Sign In
				</a> */}
        {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
        <button className='sign-in-button' onClick={loginSubmit}>
          Sign In
        </button>
        {/* <!--  --> */}
      </form>
    </section>
  );
};

export default SignInhtmlForm;
