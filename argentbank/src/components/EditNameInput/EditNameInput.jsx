import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GreenButton from '../GreenButton/GreenButton';
import { setUser } from '../../store/slices/userSlice';
import { fetchEditName, logIn } from '../../services/apiCalls';

const EditNameInput = () => {
  const currentUser = useSelector((state) => state.userReducer);
  let user = {};
  const dispatch = useDispatch();
  let sumbmitBtn = {
    btnClass: 'edit-button',
    btnText: 'Save',
    action: handleChangeName,
  };
  let editBtn = {
    btnClass: 'edit-button',
    btnText: currentUser.editOn ? 'Cancel' : 'Edit Name',
    action: switchEdit,
  };
  function switchEdit() {
    dispatch(setUser({ ...user, editOn: !currentUser.editOn }));
  }

  async function handleChangeName() {
    let newFirstNameFormValue = document.getElementById('editFirstName').value;
    let newLastNameFormValue = document.getElementById('editLastName').value;
    let login = await logIn(currentUser.email, currentUser.password);
    dispatch(setUser({ ...user, token: login.body.token }));
    switchEdit();
    if (newFirstNameFormValue && newLastNameFormValue) {
      const newName = await fetchEditName(
        currentUser,
        newFirstNameFormValue,
        newLastNameFormValue
      );
      dispatch(
        setUser({
          ...user,
          firstName: newName.body.firstName,
          lastName: newName.body.lastName,
        })
      );
    }
  }

  return (
    <div className='editNameInput_container'>
      <div className='editNameInput_col editNameInput_col-left'>
        <input
          type='text'
          id='editFirstName'
          name='firstName'
          className='editName-input'
          defaultValue={currentUser.firstName}
        ></input>
        <GreenButton {...sumbmitBtn}></GreenButton>
      </div>
      <div className='editNameInput_col editNameInput_col-right'>
        <input
          type='text'
          id='editLastName'
          name='lastName'
          className='editName-input'
          defaultValue={currentUser.lastName}
        ></input>
        <GreenButton {...editBtn}></GreenButton>
      </div>
    </div>
  );
};

export default EditNameInput;
