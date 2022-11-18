import React from 'react';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import SignInForm from '../components/SignInForm/SignInForm';

const SignIn = () => {
  return (
    <div className='app'>
      <Nav></Nav>
      <main className='main bg-dark'>
        <SignInForm />
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
