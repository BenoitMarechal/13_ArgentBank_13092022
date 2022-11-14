import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFirstLoadFalse, resetUser } from '../../store/slices/userSlice';

const Footer = () => {
  // var newS = sessionStorage.getItem('newSession');
  //   useEffect(() => {
  //     if (newS === true && remember === false) {
  //       console.log('vide');
  //       //dispatch(setFirstLoadFalse());
  //       sessionStorage.setItem('newSession', false);
  //       dispatch(resetUser);
  //     }
  //   });
  //   console.log(remember);
  //   console.log(newS);
  return (
    <footer className='footer'>
      <p className='footer-text'>Copyright 2020 Argent Bank</p>
    </footer>
  );
};

export default Footer;
