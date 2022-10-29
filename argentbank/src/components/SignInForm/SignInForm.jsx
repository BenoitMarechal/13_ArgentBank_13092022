import React  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setPassword, toggleRemember } from '../../store/slices/loginSlice';
import {setUserEmail, setUserPassword, setUserRemember, setConnectedTrue, setConnectedFalse, toggleConnected} from '../../store/slices/userSlice'

const SignInhtmlForm = () => {
const dispatch = useDispatch()
const loginEmail=useSelector((state)=>(state.loginReducer.email))
const loginPassword=useSelector((state)=>(state.loginReducer.password))
const loginRemember=useSelector((state)=>(state.loginReducer.remember))

	
	
	function getEmail (e){			
		dispatch(setEmail(e.target.value))			
	}
	function getPassword (e){			
		dispatch(setPassword((e.target.value)))			
	}
	function switchRemember(){			
		dispatch(toggleRemember())
	}	
	// function loginSubmit(e){
	// 	e.preventDefault()
	// 	dispatch(setUserEmail(loginEmail))
	// 	dispatch(setUserPassword(loginPassword))
	// 	dispatch(setUserRemember(loginRemember))
	// 	if(loginEmail!==""){
	// 		dispatch(setConnectedTrue())
	// 	}
		
	// }
	function loginSubmit2(e){
		e.preventDefault()
		let userNameFormValue=document.getElementById('username').value
		let passwordFormValue=document.getElementById('password').value
		//console.log(userNameFormValue)
		dispatch(setUserEmail(userNameFormValue))
		dispatch(setUserPassword(passwordFormValue))
		dispatch(setUserRemember(loginRemember))
		if(userNameFormValue!==""){
			dispatch(setConnectedTrue())
		}
		if(userNameFormValue===""){
			dispatch(setConnectedFalse())
		}

		
	}
	
	return (
		<section className='sign-in-content' > 
			<i className='fa fa-user-circle sign-in-icon'></i>
			<h1>Sign In</h1>
			<form>
				<div className='input-wrapper'>
					<label htmlFor='username'>Username</label>
					<input type='text' id='username' 
					//onChange={getEmail} 
					/>
				</div>
				<div className='input-wrapper'>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password' 
					//onChange={getPassword}
					 />
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
				<button className='sign-in-button' onClick={loginSubmit2}>Sign In</button>				
				{/* <!--  --> */}
			</form>
		</section>
	);
};

export default SignInhtmlForm;
