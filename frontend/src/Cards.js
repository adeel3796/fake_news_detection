import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC News Detection!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/10.jpg.jpg'
              text='Scientists Discover New Species of Talking Penguins in Antarctica!.'
              label='NEW'
              path='/services'
            />
            <CardItem
              src='/images/12.jpg.jpg'
              text='Exclusive Interview with the First Martian President Reveals Plans for a Candy Cane Space Station!'
              label='NEW'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/13.jpg.png'
              text='World Governments Agree to Replace Currency with Magic Beans - Global Prosperity Ensues!'
              label='NEW'
              path='/services'
            />
            <CardItem
              src='/images/11.jpg.webp'
              text='Lost City of Atlantis Rises Again, Offers Discount Vacations to Tourists!'
              label='NEW'
              path='/products'
            />
            <CardItem
              src='/images/14.jpg.webp'
              text='Breaking News: Earth Decides to Take a Week Off - All Appointments Canceled!'
              label='NEW'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;