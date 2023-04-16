import { React, useState, useEffect } from 'react';
import RevoCalendar from 'revo-calendar';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import EventCardDeck from './EventCards.jsx';

export default function EventsPage(props) {
  let eventsList = [
    {
      name: "Green Goblins Gardening Onboarding",
      date: Date.parse('18 April 2023 05:00:00 GMT-7'),
      allDay: false,
      extra: {
        text: '9 RSVPs'
      }
    },
    {
      name: "Green Goblins Gardening Onboarding",
      date: Date.parse('21 April 2023 04:00:00 GMT-7'),
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
    window.open('https://media.tenor.com/DbLIdKFZdesAAAAM/hello-hi.gif', '_blank', 'noreferrer');
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

  return (
    <div className='container-main mt-5'>
      <EventCardDeck />
      <div className='calendar-container lead'>
        <RevoCalendar
          events={eventsList}
          style={{
            borderRadius: "1px",
            border: "5px solid #2A3B37",
          }}
          highlightToday={true}
          lang="en"
          primaryColor="#2A3B37"
          secondaryColor="#CCD4D0"
          todayColor="#829F91"
          textColor="#333333"
          indicatorColor="#F5F5F5"
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
      <footer className='pt-5'>
        <button className='mb-5 add-event-btn' onClick={handleClick}>Submit an Event</button>
      </footer>
    </div>
  );
}

