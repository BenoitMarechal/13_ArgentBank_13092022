import React from 'react';
import Footer from '../components/Footer/Footer';
import GreenButton from '../components/GreenButton/GreenButton';
import Nav from '../components/Nav/Nav';
import AllAccounts from '../assets/accountsStaticData';
import AccountWrapper from '../components/AccountWrapper/AccountWrapper';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EditNameInput from '../components/EditNameInput/EditNameInput';
import { setUser } from '../store/slices/userSlice';

const Profile = () => {
  let user = {};
  const currentUser = useSelector((state) => state.userReducer);
  const editOn = useSelector((state) => state.userReducer.editOn);
  const dispatch = useDispatch();
  function switchEdit() {
    dispatch(setUser({ ...user, editOn: !currentUser.editOn }));
  }

  let editBtn = {
    btnClass: 'edit-button',
    btnText: 'Edit Name',
    action: switchEdit,
  };
  let transactionBtn = {
    btnClass: 'transaction-button',
    btnText: 'View transactions',
  };

  return (
    <div className='app'>
      <Nav></Nav>
      {currentUser.token ? (
        <main className='main bg-dark'>
          <div className='header'>
            <h1>
              Welcome back
              <br />
              {!editOn
                ? currentUser.firstName + ' ' + currentUser.lastName + '!'
                : ''}
            </h1>
            {!editOn ? <GreenButton {...editBtn}></GreenButton> : ''}
            {editOn ? <EditNameInput></EditNameInput> : ''}
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
        </main>
      ) : (
        <main className='main bg-dark'>
          <div className='header'>
            <h1>
              Please <Link to='/signin'>log in</Link> before accessing your
              accounts
            </h1>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Profile;
