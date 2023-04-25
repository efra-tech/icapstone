import { React, useState, useEffect } from 'react';
import RevoCalendar from 'revo-calendar';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import EventCardDeck from './EventCards.jsx';
// import CardCarousel from '@homeaway/react-card-carousel';


export default function EventsPage(props) {
  let eventsList = [
    {
      name: "Green Goblins Gardening Onboarding",
      date: Date.parse('18 April 2023 17:00:00 GMT-7'),
      allDay: false,
      extra: {
        text: '9 RSVPs'
      }
    },
    {
      name: "Green Goblins Gardening Onboarding",
      date: Date.parse('21 April 2023 16:00:00 GMT-7'),
      allDay: false,
      extra: {
        text: '10 RSVPs'
      }
    },
    {
      name: "Summer Prep Workshop for Kids",
      date: Date.parse('24 April 2023 10:00:00 GMT-7'),
      allDay: false,
      extra: {
        text: '12 RSVPs'
      }
    },
    {
      name: "Pumkin Harvest at Parlington",
      date: Date.parse('02 Oct 2023 10:00:00 GMT-7'),
      allDay: false,
      extra: {
        text: '9 RSVPs'
      }
    }
  ];
  function handleClick(event){
    window.open('https://forms.gle/Vz8jnRsiDLjuTh4r8', '_blank', 'noreferrer');
  }

  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [events, setEvents] = useState([]);

  // set events
  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "events"));
    const fetchedEvents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().description,
      date: new Date(doc.data().date),
    }));
    setEvents(fetchedEvents);
  }

  // submitting add event modal
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (description.trim() === '') {
      alert('Description is required.');
      return;
    }

    const db = getFirestore();
    const eventsRef = collection(db, "events");
    try {
      await addDoc(eventsRef, {
        description: description,
        date: date.toString(),
        user: "",
      }
      );
      setShowModal(false);
      setDescription("");
      setDate(null);
      fetchEvents();
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  };

  // calender styling:
  /// width of side panels
  /// border size
  /// indicator color
  /// color schema

  return (
    <div className='container-main mt-5'>
      <EventCardDeck />
      {/* <div>
        <CardCarousel
          actionText={'See More'}
          actionHref={'https://www.homeaway.com'}
          actionHrefTarget={'_blank'}
          breakpoints={{
              '820': 4,
              '540': 3,
              '0': 2
          }}
          cardIndex={this.state.index}
          getControlOffset={this.getControlOffset(this.aspectRatio)}
          onActionClick={this.actionClick}
          onNextClick={this.handlePrevNext}
          onPreviousClick={this.handlePrevNext}
          nextLabel={'Next'}
          paging
          previousLabel={'Previous'}
          title={'Secondary Action Carousel'}
        >
                {<EventCardDeck />}
        </CardCarousel>
      </div> */}
      <div className='calendar-container lead'>
        <div className='btn-container' style={{backgroundColor: "#2A3B37"}}>
          <button className='mb-5 add-event-btn' onClick={handleClick}>Submit an Event</button>
        </div>
        <RevoCalendar
          events={eventsList}
          style={{
            borderRadius: "1px",
            borderRight: "50px solid #2A3B37",
            borderLeft: "50px solid #2A3B37",
            borderTop: "60px solid #2A3B37",
            borderBottom: "200px solid #2A3B37",
            height: "59vw"
          }}
          highlightToday={true}
          lang="en"
          primaryColor="#283834"
          secondaryColor="#f1f4e3"
          todayColor="#829F91"
          textColor="#333333"
          indicatorColor="#FF6720"
          animationSpeed={
            300
          }
          sidebarWidth={
            200
          }
          detailWidth={
            480
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
            false
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
    </div>
  );
}

