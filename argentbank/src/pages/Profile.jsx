import React from 'react';
import Footer from '../components/Footer/Footer';
import GreenButton from '../components/GreenButton/GreenButton';
import Nav from '../components/Nav/Nav';
import AllAccounts from '../assets/accountsStaticData';
import AccountWrapper from '../components/AccountWrapper/AccountWrapper';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
	const user=useSelector((state)=>state.userReducer)
	let editBtn = {
		btnClass: 'edit-button',
		btnText: 'Edit Name',
	};
	let transactionBtn = {
		btnClass: 'transaction-button',
		btnText: 'View transactions',
	};

	return (
		<div className='app'>
			<Nav></Nav>
			{user.connected?
			<main className='main bg-dark'>
			 <div className='header'>
					<h1>
						Welcome back
						<br />
						Tony Jarvis!
					</h1>
					<GreenButton {...editBtn}></GreenButton>
				</div>
				
				<h2 className='sr-only'>Accounts</h2>
				{AllAccounts.map((account) => {
					return (
						<section className='account' key={AllAccounts.indexOf(account)}>
							<AccountWrapper {...account} />
							<div className='content-wrapper-cta'>
								<GreenButton {...transactionBtn}></GreenButton>
							</div>
						</section>
					);
				})}



			</main>: 
			
			 <main className='main bg-dark'>
			<div className='header'>
					<h1>
						Please <Link to='/signin'>log in</Link> before accessing your accounts						
					</h1>
				</div>
				</main>
				
				}
			<Footer />
		</div>
	);
};

export default Profile;
