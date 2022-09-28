import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png';

const Nav = () => {
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
				<NavLink className={'main-nav-item'} to={'/signin'}>
					<i className='fa fa-user-circle'></i> Sign In
				</NavLink>
				<NavLink className={'main-nav-item'} to={'/user'}>
					<i className='fa fa-user-circle'></i>
					Tony
				</NavLink>
				<NavLink className={'main-nav-item'} to={'/'}>
					<i className='fa fa-sign-out'></i>
					Sign Out
				</NavLink>
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
