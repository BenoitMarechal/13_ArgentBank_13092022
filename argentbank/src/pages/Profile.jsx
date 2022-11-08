import React from 'react';
import Footer from '../components/Footer/Footer';
import GreenButton from '../components/GreenButton/GreenButton';
import Nav from '../components/Nav/Nav';
import AllAccounts from '../assets/accountsStaticData';
import AccountWrapper from '../components/AccountWrapper/AccountWrapper';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EditNameInput from '../components/EditNameInput/EditNameInput';
import { setEditTrue, toggleEdit } from '../store/slices/editSlice';

const Profile = () => {
	const user=useSelector((state)=>state.userReducer)
	const editOn=useSelector((state)=>state.editReducer.editOn)
	const dispatch=useDispatch()

	let editBtn = {
		btnClass: 'edit-button',
		btnText: editOn?'Cancel':"Edit Name",
		action: handleEdit
	};
	let transactionBtn = {
		btnClass: 'transaction-button',
		btnText: 'View transactions',
	};
	// let editNameInputProps=
	// 	[{
	// 		screen:"First name",
	// 		tech:"firstName"
	// 	},
	// 	{
	// 		screen:"Last name",
	// 		tech:"lastName"
	// 	}]
	
	//console.log(editNameInputProps)
	function handleEdit(e){
		dispatch(toggleEdit())
	}

	return (
		<div className='app'>
			<Nav></Nav>
			{user.connected?
			<main className='main bg-dark'>
			 <div className='header'>
					<h1>
						Welcome back
						<br />
						{user.firstName+' '}
						{user.lastName}!
					</h1>
					<GreenButton {...editBtn} ></GreenButton>
					{editOn?<EditNameInput></EditNameInput>:""}					
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
