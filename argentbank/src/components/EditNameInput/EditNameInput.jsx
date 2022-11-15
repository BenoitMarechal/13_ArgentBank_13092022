import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GreenButton from '../GreenButton/GreenButton';
import {
  setFirstName,
  setLastName,
  toggleEdit,
} from '../../store/slices/userSlice';
import { fetchEditName } from '../../services/apiCalls';

const EditNameInput = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  let sumbmitBtn = {
    btnClass: 'edit-button',
    btnText: 'Save',
    action: handleChangeName,
  };
  let editBtn = {
    btnClass: 'edit-button',
    btnText: user.editOn ? 'Cancel' : 'Edit Name',
    action: switchEdit,
  };
  function switchEdit() {
    dispatch(toggleEdit());
  }

  async function handleChangeName() {
    let newFirstNameFormValue = document.getElementById('editFirstName').value;
    let newLastNameFormValue = document.getElementById('editLastName').value;

    // e.preventDefault();
    dispatch(toggleEdit());
    if (newFirstNameFormValue && newLastNameFormValue) {
      const newName = await fetchEditName(
        user,
        newFirstNameFormValue,
        newLastNameFormValue
      );
      dispatch(setFirstName(newName.body.firstName));
      dispatch(setLastName(newName.body.lastName));
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
          defaultValue={user.firstName}
        ></input>
        <GreenButton {...sumbmitBtn}></GreenButton>
      </div>
      <div className='editNameInput_col editNameInput_col-right'>
        <input
          type='text'
          id='editLastName'
          name='lastName'
          className='editName-input'
          defaultValue={user.lastName}
        ></input>
        <GreenButton {...editBtn}></GreenButton>
      </div>
    </div>
  );
};

export default EditNameInput;
