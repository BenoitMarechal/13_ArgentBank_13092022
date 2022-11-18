import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, resetUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { logIn, retrieveUser } from '../../services/apiCalls';

const SignInhtmlForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const currentToken = useSelector((state) => state.userReducer.token);
  const userError = useSelector((state) => state.userReducer.userError);
  const passwordError = useSelector((state) => state.userReducer.passwordError);
  let user = {};
  async function loginSubmit(e) {
    e.preventDefault(); //avoids refreshing page
    dispatch(resetUser());
    let userNameFormValue = document.getElementById('username').value;
    let passwordFormValue = document.getElementById('password').value;
    let login = await logIn(userNameFormValue, passwordFormValue);
    if (login.message === 'Error: User not found!') {
      dispatch(setUser({ ...user, userError: true }));
    }
    if (login.message === 'Error: Password is invalid') {
      dispatch(setUser({ ...user, passwordError: true }));
    }
    if (login.status === 200) {
      //manage remember
      let target = document.getElementById('remember-me');
      if (target && target.checked === true) {
        user.remember = true;
      } else {
        user.remember = false;
      }
      dispatch(
        setUser({
          ...user,
          token: login.body.token,
          password: passwordFormValue,
        })
      );
      navigate('/profile');
    }
  }

  useEffect(() => {
    const fetchProfile = async () => {
      if (currentToken !== null) {
        let profile = await retrieveUser(currentToken);
        if (profile.status === 200) {
          dispatch(
            setUser({
              ...user,
              email: profile.body.email,
              firstName: profile.body.firstName,
              lastName: profile.body.lastName,
              userId: profile.body.id,
            })
          );
        } else {
          console.log('error');
        }
      }
    };
    fetchProfile();
    // eslint-disable-next-line
  }, [currentToken]);

  return (
    <section className='sign-in-content'>
      <i className='fa fa-user-circle sign-in-icon'></i>
      <h1>Sign In</h1>
      <form>
        <div className='input-wrapper'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' autoComplete='email' />
          {userError ? <div className='error'>User name not found</div> : ''}
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            autoComplete='current-password'
          />
          {passwordError ? <div className='error'>Wrong password</div> : ''}
        </div>
        <div className='input-remember'>
          <input type='checkbox' id='remember-me' />
          <label htmlFor='remember-me'>Remember me</label>
        </div>
        <button className='sign-in-button' onClick={loginSubmit}>
          Sign In
        </button>
      </form>
    </section>
  );
};

export default SignInhtmlForm;
