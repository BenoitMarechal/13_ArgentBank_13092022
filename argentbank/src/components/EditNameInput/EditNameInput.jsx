import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GreenButton from '../GreenButton/GreenButton';
import { setEditFalse, setEditTrue , setNewFirstName, setNewLastName,  toggleEdit} from '../../store/slices/editSlice';
import { setFirstName, setLastName } from '../../store/slices/userSlice';


const EditNameInput = () => {
    let sumbmitBtn = {
		btnClass: 'edit-button',
		btnText: 'Change Name',
        action: handleChangeName
	};
    const user=useSelector((state)=>state.userReducer)    
    const dispatch=useDispatch()
    function handleChangeName(e){    
        dispatch(toggleEdit())
        let newFirstNameFormValue=document.getElementById('editFirstName').value
		let newLastNameFormValue=document.getElementById('editLastName').value        
        //AJOUTER COMPORTEMENT EN CAS DE CHAMPS VIDES
        if (newFirstNameFormValue!==''&&newLastNameFormValue!==''){
            let changeBody={
                "firstName":newFirstNameFormValue,
                "lastName":newLastNameFormValue
            }
            console.log(changeBody)           
            let changeUrl='http://localhost:3001/api/v1/user/profile'	   
		
		   fetch(changeUrl, {
			method:'PUT',
			headers:{
				'Content-Type': 'application/json',
                'Authorization': "Bearer "+user.token
			},
			
			body:JSON.stringify(changeBody)
		   })  
		   .then((response) =>    response.json())
		   .then((data) => {
			 console.log('Success:', data)
            dispatch (setFirstName(data.body.firstName))
			dispatch (setLastName(data.body.lastName))
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
    }
    
    return (
        <div className='editNameInput_container'>
           <label htmlFor="firstName">First Name</label>
            <input type="text" id="editFirstName" name="firstName" defaultValue={user.firstName} >
            </input>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="editLastName" name="lastName" defaultValue={user.lastName} >
            </input>
            <GreenButton {...sumbmitBtn} ></GreenButton>
        </div>
    );
};

export default EditNameInput;