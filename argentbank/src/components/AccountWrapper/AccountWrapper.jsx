import React from 'react';

const AccountWrapper = (account) => {
  return (
    <div className='account-content-wrapper'>
      <h3 className='account-title'>{account.title}</h3>
      <p className='account-amount'>${account.amount}</p>
      <p className='account-amount-description'>{account.description}</p>
    </div>
  );
};

export default AccountWrapper;
