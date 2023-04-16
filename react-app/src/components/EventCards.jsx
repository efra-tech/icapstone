import React from 'react';

export default function EventCardDeck(props){
  return(
    <div className='container'>
      <div className='d-flex row my-5'>
        <EventCard name='Green Goblins Gardening Onboarding' date='April 14, 2023' time='5-7pm' />
        <EventCard name='Green Goblins Gardening Onboarding' date='April 14, 2023' time='5-7pm' />
        <EventCard name='Green Goblins Gardening Onboarding' date='April 14, 2023' time='5-7pm' />
        <EventCard name='Green Goblins Gardening Onboarding' date='April 14, 2023' time='5-7pm' />
      </div>
    </div>
  );
}

function EventCard(props){
  return(
    <div className='bg-white d-flex m-5 col-5'>
      <div className='p-4 bg-primary col-3'></div>
      <div className='col-9 py-4 card-details'>
        <h3>{props.name}</h3>
        <p>{props.date}</p>
        <p>{props.time}</p>
        <button>info</button>
      </div>
    </div>
  );
}