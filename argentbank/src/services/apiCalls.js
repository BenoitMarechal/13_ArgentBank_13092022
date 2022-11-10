export async function logIn() {
  let userNameFormValue = document.getElementById('username').value;
  let passwordFormValue = document.getElementById('password').value;
  let loginBody = {
    email: userNameFormValue,
    password: passwordFormValue,
  };
  let loginUrl = 'http://localhost:3001/api/v1/user/login';
  await fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginBody),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      return data.body.token;
    })
    .catch((error) => {
      console.error('Error:', error);
      return error;
    });
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
