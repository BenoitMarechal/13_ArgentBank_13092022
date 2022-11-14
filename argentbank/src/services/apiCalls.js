import { setToken } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

export async function logIn(email, password) {
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
  //dispatch(toggleEdit());
  //AJOUTER COMPORTEMENT EN CAS DE CHAMPS VIDES

  let changeBody = {
    firstName: newFirstNameFormValue,
    lastName: newLastNameFormValue,
  };
  console.log(changeBody);
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

  // await fetch(changeUrl, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: 'Bearer ' + user.token,
  //   },

  //   body: JSON.stringify(changeBody),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log('Success:', data);
  //     return data;
  //     // dispatch(setFirstName(data.body.firstName));
  //     // dispatch(setLastName(data.body.lastName));
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
}