import React from 'react';
import RevoCalendar from 'revo-calendar';

export default function EventsPage(props) {
  return (
    <div>
      <h2>Events Page</h2>
      <div className='calender-container'>
        <div className="calendar">
           <
            RevoCalendar
            style={{
              borderRadius: "5px",
              border: "5px solid #F2F2EC",
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
              true
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
              false
            }
            detailDateFormat="DD/MM/YYYY"
          />
        </div>
      </div>
    </div>
  );
}