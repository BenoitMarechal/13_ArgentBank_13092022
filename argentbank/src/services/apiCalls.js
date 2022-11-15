// import { setToken } from '../store/slices/userSlice';
// import { useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';

export async function logIn(email, password) {
  console.log('demande login');
  let loginBody = {
    email: email,
    password: password,
  };
  let loginUrl = 'http://localhost:3001/api/v1/user/login';

  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginBody),
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
}
export async function retrieveUser(token) {
  let profileUrl = 'http://localhost:3001/api/v1/user/profile';
  try {
    const response = await fetch(profileUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    return err;
  }
}

export async function fetchEditName(
  user,
  newFirstNameFormValue,
  newLastNameFormValue
) {
  console.log('fetch');
  let changeBody = {
    firstName: newFirstNameFormValue,
    lastName: newLastNameFormValue,
  };
  let changeUrl = 'http://localhost:3001/api/v1/user/profile';
  try {
    const response = await fetch(changeUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(changeBody),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    return err;
  }
}
