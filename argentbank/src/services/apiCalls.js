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
  console.log('token reçu');
  console.log(token);
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

// await fetch(profileUrl, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer ' + token,
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Success:', data);
//     return data;
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//     return error;
//   });

// export async function retrieveUser(token) {
//   console.log('token reçu');
//   console.log(token);
//   let profileUrl = 'http://localhost:3001/api/v1/user/profile';
//   await fetch(profileUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer ' + token,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Success:', data);
//       return data;
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//       return error;
//     });
// }

//export function editUserName(firstName, lastName, token) {}
