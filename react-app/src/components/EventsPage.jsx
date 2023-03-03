import React from 'react';
import RevoCalendar from 'revo-calendar';

export default function EventsPage(props) {
  return (
    <div>
      <h2>Events Page</h2>
      <div className="calendar">
        <
          RevoCalendar
          style={{
            borderRadius: "5px",
            border: "5px solid #4F6995",
          }}
          highlightToday={true}
          lang="en"
          primaryColor="#34005A"
          secondaryColor="#D7E6EE"
          todayColor="#3B3966"
          textColor="#333333"
          indicatorColor="orange"
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
  );
}