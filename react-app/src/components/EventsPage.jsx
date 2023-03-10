import React from 'react';
import RevoCalendar from 'revo-calendar';

export default function EventsPage(props) {
  return (
    <div className='d-flex'>
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
          true
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
          true
        }
        detailDateFormat="DD/MM/YYYY"
      />
      <div id='events-panel'>
        <div className='card border border-dark'>
          <h2>Green Goblins Gardening Onboarding</h2>
          <div className='d-flex justify-content-center'>
            <button>RBAC</button>
            <button>Small Group</button>
          </div>
        </div>
      </div>
    </div>
  );
}