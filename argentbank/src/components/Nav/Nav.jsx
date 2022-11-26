import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png';
import { useEffect } from 'react';
import { setUser, resetUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../services/apiCalls';

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.userReducer);
  let user = {};
  function signOutFunction() {
    dispatch(resetUser());
    window.sessionStorage.clear();
    navigate('/');
  }
  const remember = useSelector((state) => state.userReducer.remember);

  async function refreshToken() {
    if (currentUser.email !== '' && currentUser.password !== '') {
      let login = await logIn(currentUser.email, currentUser.password);
      if (login.message === 'Error: User not found!') {
        dispatch(setUser({ ...user, userError: true }));
      }
      if (login.message === 'Error: Password is invalid') {
        dispatch(setUser({ ...user, passwordError: true }));
      }
      if (login.status === 200) {
        dispatch(setUser({ ...user, token: login.body.token }));
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
        window.sessionStorage.setItem('sessionOn', true);
      }
    }
  });

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

      <div className='main-nav__menu'>
        {currentUser.token ? (
          <NavLink className={'main-nav-item'} to={'/profile'}>
            <i className='fa fa-user-circle'></i>
            {currentUser.firstName}
          </NavLink>
        ) : (
          <NavLink className={'main-nav-item'} to={'/signin'}>
            <i className='fa fa-user-circle'></i> Sign In
          </NavLink>
        )}
        {currentUser.token ? (
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
