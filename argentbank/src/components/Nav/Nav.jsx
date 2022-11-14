import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png';
import { useEffect } from 'react';
//import { resetLogin ,setRememberFalse} from '../../store/slices/loginSlice';
import { resetUser } from '../../store/slices/userSlice';
//import {setUserEmail, setUserPassword, setUserRemember, setConnectedTrue, setConnectedFalse, toggleConnected} from '../../store/slices/loginSlice'

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  function signOutFunction() {
    dispatch(resetUser());
    window.sessionStorage.clear();
  }

  const remember = useSelector((state) => state.userReducer.remember);
  function checkIfRemembered() {
    if (
      window.sessionStorage.getItem('sessionOn') === null &&
      remember === false
    ) {
      signOutFunction();
      window.sessionStorage.setItem('sessionOn', true);
    }
  }

  useEffect(() => {
    if (
      window.sessionStorage.getItem('sessionOn') === null &&
      remember === false
    ) {
      signOutFunction();
      window.sessionStorage.setItem('sessionOn', true);
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
