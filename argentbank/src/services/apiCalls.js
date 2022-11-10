import { setToken } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

export async function logIn(email, password) {
  // const dispatch = useDispatch();
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
    //console.log(result);
    return result;
  } catch (err) {
    // console.log(err);
    return err;
  }
}

export function retrieveUser(token) {
  let profileUrl = 'http://localhost:3001/api/v1/user/profile';
  fetch(profileUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
      return error;
    });
}

export function editUserName(firstName, lastName, token) {}
