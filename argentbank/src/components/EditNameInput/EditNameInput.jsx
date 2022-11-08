import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GreenButton from '../GreenButton/GreenButton';
import { setEditFalse, setEditTrue , toggleEdit} from '../../store/slices/editSlice';



const EditNameInput = () => {
    let sumbmitBtn = {
		btnClass: 'edit-button',
		btnText: 'Change Name',
        action: handleChangeName
	};
    const user=useSelector((state)=>state.userReducer)
    const dispatch=useDispatch()
    // function switchEditTrue(){dispatch(setEditTrue)}
    // function switchEditFlase(){dispatch(setEditFalse)}
    // function startToggleEdit(){dispatch(toggleEdit)}
    function handleChangeName(e){    
        dispatch(toggleEdit())
        ////logique POST etc        
    }
    
    return (
        <div className='editNameInput_container'>
           <label htmlFor="firstName">First Name</label>
            <input type="text" id="editFirstName" name="firstName" placeholder={user.firstName} >
            </input>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="editLastName" name="lastName" placeholder={user.lastName} >
            </input>
            <GreenButton {...sumbmitBtn} onClick={handleChangeName}></GreenButton>
        </div>
    );
};

export default EditNameInput;