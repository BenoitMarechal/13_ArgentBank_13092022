import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserEmail,
  setRemember,
  resetUser,
  setConnectedTrue,
  setFirstName,
  setLastName,
  setToken,
  setUserErrorTrue,
  setPasswordErrorTrue,
} from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { logIn, retrieveUser } from '../../services/apiCalls';

const SignInhtmlForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const currentToken = useSelector((state) => state.userReducer.token);

  async function loginSubmit2(e) {
    e.preventDefault();
    dispatch(resetUser());
    let userNameFormValue = document.getElementById('username').value;
    let passwordFormValue = document.getElementById('password').value;
    let login = await logIn(userNameFormValue, passwordFormValue);
    if (login.message === 'Error: User not found!') {
      dispatch(setUserErrorTrue());
    }
    if (login.message === 'Error: Password is invalid') {
      dispatch(setPasswordErrorTrue());
    }
    if (login.status === 200) {
      dispatch(setRemember());
      dispatch(setConnectedTrue());
      dispatch(setToken(login.body.token));
      navigate('/profile');
    }
  }

  useEffect(() => {
    const fetchProfile = async () => {
      if (currentToken !== null) {
        let profile = await retrieveUser(currentToken);
        if (profile.status === 200) {
          dispatch(setUserEmail(profile.body.email));
          dispatch(setFirstName(profile.body.firstName));
          dispatch(setLastName(profile.body.lastName));
        } else {
          console.log('error');
        }
      }
    };
    fetchProfile();
  }, [currentToken]);

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
            autoComplete='email'
            //onChange={getEmail}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            autoComplete='current-password'
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
        <button className='sign-in-button' onClick={loginSubmit2}>
          Sign In
        </button>
        {/* <!--  --> */}
      </form>
    </section>
  );
};

export default SignInhtmlForm;
