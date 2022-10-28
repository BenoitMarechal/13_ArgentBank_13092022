import React  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setPassword, toggleRemember } from '../../store/slices/loginSlice';
import {setUserEmail, setUserPassword, setUserRemember, setUserAll} from '../../store/slices/userSlice'
//import { useState } from 'react';
//import store from '../../store/store';
//import { selectUser } from '../../selectors/selectUser';

const SignInhtmlForm = () => {
	//const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
 // const yay=useSelector((state) => state.remember)
	
	
	function getEmail (e){			
		dispatch(setEmail(e.target.value))			
	}
	function getPassword (e){			
		dispatch(setPassword((e.target.value)))			
	}
	function switchRemember(){	
		
		dispatch(toggleRemember())
		//console.log(yay)
	}
	//const yay=useSelector((state) => state.login.email)
	function loginSubmit(e){
		e.preventDefault()
		
		//console.log(yay)
	}
	

	


	return (
		<section className='sign-in-content' > 
			<i className='fa fa-user-circle sign-in-icon'></i>
			<h1>Sign In</h1>
			<form>
				<div className='input-wrapper'>
					<label htmlFor='username'>Username</label>
					<input type='text' id='username' onChange={getEmail} />
				</div>
				<div className='input-wrapper'>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password' onChange={getPassword} />
				</div>
				<div className='input-remember'>
					<input type='checkbox' id='remember-me' onClick={switchRemember}/>
					<label htmlFor='remember-me'>Remember me</label>
				</div>
				{/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
				{/* <a href='./user' className='sign-in-button'>
					Sign In
				</a> */}
				{/* <!-- SHOULD BE THE BUTTON BELOW --> */}
				<button className='sign-in-button' onClick={loginSubmit}>Sign In</button>
				{/* <!--  --> */}
			</form>
		</section>
	);
};

export default SignInhtmlForm;
