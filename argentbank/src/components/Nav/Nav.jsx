import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png';
import { useEffect } from 'react';
//import { resetLogin ,setRememberFalse} from '../../store/slices/loginSlice';
import {
  resetUser,
  setRemember,
  setUserErrorTrue,
  setPasswordErrorTrue,
  setToken,
} from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import {
  logIn,
  // retrieveUser,
} from '../../services/apiCalls';
//import {setUserEmail, setUserPassword, setUserRemember, setConnectedTrue, setConnectedFalse, toggleConnected} from '../../store/slices/loginSlice'

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer);
  function signOutFunction() {
    dispatch(resetUser());
    window.sessionStorage.clear();
    navigate('/');
  }
  const remember = useSelector((state) => state.userReducer.remember);

  async function refreshToken() {
    console.log('refresh token');
    if (user.email !== '' && user.password !== '') {
      let login = await logIn(user.email, user.password);
      if (login.message === 'Error: User not found!') {
        dispatch(setUserErrorTrue());
      }
      if (login.message === 'Error: Password is invalid') {
        dispatch(setPasswordErrorTrue());
      }
      if (login.status === 200) {
        dispatch(setToken(login.body.token));
      }
    }
  }

  useEffect(() => {
    if (
      window.sessionStorage.getItem('sessionOn') === null &&
      remember === false
    ) {
      signOutFunction();
      window.sessionStorage.setItem('sessionOn', true);
    } else {
      //get new token as they only last 24hrs
      if (
        window.sessionStorage.getItem('sessionOn') === null &&
        remember === true
      ) {
        refreshToken();
      }
    }
  }, []);

  // checkIfRemembered();

  return (
    <nav className='main-nav'>
      <NavLink className={'main-nav-logo'} to='/'>
        <img
          src={logo}
          alt='Argent Bank Logo'
          className='main-nav-logo-image'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </NavLink>

      <div>
        {user.connected ? (
          <NavLink className={'main-nav-item'} to={'/profile'}>
            <i className='fa fa-user-circle'></i>
            {user.firstName}
          </NavLink>
        ) : (
          <NavLink className={'main-nav-item'} to={'/signin'}>
            <i className='fa fa-user-circle'></i> Sign In
          </NavLink>
        )}
        {user.connected ? (
          <NavLink
            className={'main-nav-item'}
            to={'/signin'}
            onClick={signOutFunction}
          >
            <i className='fa fa-sign-out'></i>
            Sign Out
          </NavLink>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};

export default Nav;
