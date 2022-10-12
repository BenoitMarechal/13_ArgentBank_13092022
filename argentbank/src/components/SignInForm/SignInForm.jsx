import React, {ChangeEvent} from 'react';
import userAction from '../../store/reducers/loginReducer';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import store from '../../store/store';
import { selectUser } from '../../selectors/selectUser';

const SignInhtmlForm = () => {

	const [value, setValue]= useState("")
	const user=useSelector(selectUser)
	const dispatch=useDispatch()
	//const user=useSelector(selectUser)
	
	function change (e){	
		let test=(e.target.value)
		
		console.log('test')
		console.log(test)
		setValue(test)
		console.log('value')
		console.log(value)
		//dispatch(userAction())
	}
	


	return (
		<section className='sign-in-content' > 
			<i className='fa fa-user-circle sign-in-icon'></i>
			<h1>Sign In</h1>
			<form>
				<div className='input-wrapper'>
					<label htmlFor='username'>Username</label>
					<input type='text' id='username' onChange={change} />
				</div>
				<div className='input-wrapper'>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password' />
				</div>
				<div className='input-remember'>
					<input type='checkbox' id='remember-me' />
					<label htmlFor='remember-me'>Remember me</label>
				</div>
				{/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
				<a href='./user' className='sign-in-button'>
					Sign In
				</a>
				{/* <!-- SHOULD BE THE BUTTON BELOW --> */}
				{/* <button className='sign-in-button'>Sign In</button> */}
				{/* <!--  --> */}
			</form>
		</section>
	);
};

export default SignInhtmlForm;
