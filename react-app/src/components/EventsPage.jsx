import React from 'react';
import RevoCalendar from 'revo-calendar';

export default function EventsPage(props) {

  let eventsList = [
    {
      name: "Green Goblins Gardening Onboarding",
      date: Date.now(),
      allDay: true
    }
  ];

  function handleClick(event){
    window.open('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjDwZn2lYXt0MqdSUQwDBQVBzxjZHVSk6IQ&usqp=CAU', '_blank', 'noreferrer');
  }

  return (
    <div>
      <div className='d-flex add-event-btn m-5 align-items-center'>
        <p className='align-self-center'>Submit an Event</p>
        <button className='rounded-circle p-2 m-3 btn btn-dark' onClick={handleClick}>+</button>
      </div>
      <RevoCalendar
        events={eventsList}
        style={{
          borderRadius: "5px",
          border: "5px solid #829F91",
        }}
        highlightToday={true}
        lang="en"
        primaryColor="#829F91"
        secondaryColor="#F2F2EC"
        todayColor="#829F91"
        textColor="#333333"
        indicatorColor="#3F5749"
        animationSpeed={
          300
        }
        sidebarWidth={
          180
        }
        detailWidth={
          280
        }
        showDetailToggler={
          true
        }
        showSidebarToggler={
          true
        }
        onePanelAtATime={
          false
        }
        allowDeleteEvent={
          false
        }
        allowAddEvent={
          true
        }
        openDetailsOnDateSelection={
          true
        }
        timeFormat24={
          true
        }
        showAllDayLabel={
          true
        }
        detailDateFormat="DD/MM/YYYY"
      />
    </div>
  );
}