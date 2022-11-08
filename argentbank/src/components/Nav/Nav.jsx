import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png';
//import { resetLogin ,setRememberFalse} from '../../store/slices/loginSlice';
import { resetUser } from '../../store/slices/userSlice';
//import {setUserEmail, setUserPassword, setUserRemember, setConnectedTrue, setConnectedFalse, toggleConnected} from '../../store/slices/loginSlice'




const Nav = () => {
	const dispatch = useDispatch()		
	const user=useSelector((state)=>state.userReducer)
	//const face=<i className='fa fa-user-circle'></i>^
	// function resetForm(form){
	// 	console.log(form)
	// 	if (form!==null){
	// 		form.value=""
	// 	}
	// }
	function signOutFunction(e){
		console.log('sign out')
		dispatch(resetUser())		
	}
	
	return (
		<nav className='main-nav'>
			<NavLink className={'main-nav-logo'} to='/'>
				<img
					src={logo}
					alt='Argent Bank Logo'
					className='main-nav-logo-image'
				/>
				<h1 className='sr-only'>Argent Bank</h1>
			</NavLink>

			<div>
				{user.connected?<NavLink className={'main-nav-item'} to={'/profile'}>
					<i className='fa fa-user-circle'></i>{user.firstName}			
					
				</NavLink>  :<NavLink className={'main-nav-item'} to={'/signin'}>
					<i className='fa fa-user-circle'></i> Sign In
				</NavLink>}
				{user.connected?	<NavLink className={'main-nav-item'} to={'/signin'} 
				onClick={signOutFunction}
				>
					<i className='fa fa-sign-out'></i>
					Sign Out
				</NavLink>:""}
			
				
				
			</div>
		</nav>

		// 	<div>
		// 		<a class='main-nav-item' href='./sign-in.html'>
		// 			<i class='fa fa-user-circle'></i>
		// 			Sign In
		// 		</a>
		// 	</div>

		// <nav class='main-nav'>
		// 	<a class='main-nav-logo' href='./index.html'>
		// 		<img
		// 			class='main-nav-logo-image'
		// 			src='./img/argentBankLogo.png'
		// 			alt='Argent Bank Logo'
		// 		/>
		// 		<h1 class='sr-only'>Argent Bank</h1>
		// 	</a>
		// 	<div>
		// 		<a class='main-nav-item' href='./sign-in.html'>
		// 			<i class='fa fa-user-circle'></i>
		// 			Sign In
		// 		</a>
		// 	</div>
		// </nav>
	);
};

export default Nav;
