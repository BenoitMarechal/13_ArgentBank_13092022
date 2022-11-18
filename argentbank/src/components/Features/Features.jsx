import React from 'react';
import iconChat from '../../assets/img/icon-chat.png';
import iconMoney from '../../assets/img/icon-money.png';
import iconSecurity from '../../assets/img/icon-security.png';

let features = [
  {
    icon: iconChat,
    alt: 'Chat Icon',
    h3: 'You are our #1 priority',
    p: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    icon: iconMoney,
    alt: 'Money Icon',
    h3: 'More savings means higher rates',
    p: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    icon: iconSecurity,
    alt: 'Security Icon',
    h3: 'Security you can trust',
    p: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
];

const Features = () => {
  return (
    <section className='features'>
      <h2 className='sr-only'>Features</h2>
      {features.map((item) => {
        return (
          <div className='feature-item' key={item.icon}>
            <img src={item.icon} alt={item.alt} className='feature-icon' />
            <h3 className='feature-item-title'>{item.h3}</h3>
            <p>{item.p}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
