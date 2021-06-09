import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout our EPIC Collection!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Live in the hidden paris fashion'
              label='Adventure'

            />
            <CardItem
              src='images/image6.jpg'
              text='Travel through the Islands of Bali in a astonishing view'
              label='Luxury'

            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image8.jpg'
              text='Ride through Indian Weddings on guided elephant tour'
              label='Culture'

            />
            <CardItem
              src='images/image5.jpg'
              text='Experience Europe texture on you'
              label='Flexible'
              // path='/products'
            />
            <CardItem
              src='images/image10.jpg'
              text='Walk into NewYork nights'
              label='Adrenaline'
              // path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards