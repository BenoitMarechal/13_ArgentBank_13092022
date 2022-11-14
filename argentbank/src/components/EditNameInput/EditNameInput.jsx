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
  let sumbmitBtn = {
    btnClass: 'edit-button',
    btnText: 'Change Name',
    action: handleChangeName,
  };
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
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
      <div className='editNameInput_item'>
        <label htmlFor='firstName' className='editName-label'>
          First Name
        </label>
        <input
          type='text'
          id='editFirstName'
          name='firstName'
          className='editName-input'
          defaultValue={user.firstName}
        ></input>
      </div>
      <div className='editNameInput_item'>
        <label htmlFor='lastName' className='editName-label'>
          Last Name
        </label>
        <input
          type='text'
          id='editLastName'
          name='lastName'
          className='editName-input'
          defaultValue={user.lastName}
        ></input>
      </div>
      <GreenButton {...sumbmitBtn}></GreenButton>
    </div>
  );
};

export default EditNameInput;
