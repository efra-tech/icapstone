import { React, useState, useEffect } from 'react';
import RevoCalendar from 'revo-calendar';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import EventCardDeck from './EventCards.jsx';
import 'react-multi-carousel/lib/styles.css';

export default function EventsPage(props) {
  const rsvpIconStr = "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z";

  let eventsList = [
    {
      name: "Cooking Fiyah Workshop w/ Fiyah Abakah",
      date: Date.parse('3 May 2023 5:00:00 GMT-7'),
      allDay: false,
      extra: {
        icon: rsvpIconStr,
        text: '19 RSVPs'
      }
    },
    {
      name: "YesFarm Volunteer Day",
      date: Date.parse('6 May 2023 10:00:00 GMT-7'),
      allDay: false,
      extra: {
        icon: rsvpIconStr,
        text: '10 RSVPs'
      }
    },
    {
      name: "QueerTheLand Community Gardening Day",
      date: Date.parse('17 May 2023 10:00:00 GMT-7'),
      allDay: false,
      extra: {
        icon: rsvpIconStr,
        text: '12 RSVPs'
      }
    },
    {
      name: "Apricot Harvest at Parlington",
      date: Date.parse('02 June 2023 10:00:00 GMT-7'),
      allDay: false,
      extra: {
        icon: rsvpIconStr,
        text: '9 RSVPs'
      }
    }
  ];

  function handleClick(event){
    window.open('https://forms.gle/Vz8jnRsiDLjuTh4r8', '_blank', 'noreferrer');
  }

  // carousal screen-size response
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

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
    <div className='container-main'>
      <div className='event-banner'></div>
      <div className=''>
          <div className='d-flex my-3'>
            <h1 className='events-subtitle'>Upcoming Events</h1>
            <button className='add-event-btn' onClick={handleClick}>Submit an event</button>
          </div>
          <EventCardDeck />
      </div>
      <div className='calendar-container lead'>
        <h1 className='events-subtitle'>Calendar</h1>
        <RevoCalendar
          events={eventsList}
          style={{
            borderRadius: "1px",
            borderRight: "70px solid #2A3B37",
            borderLeft: "70px solid #2A3B37",
            borderTop: "150px solid #2A3B37",
            borderBottom: "150px solid #2A3B37",
            marginBottom: "0",
            paddingBottom: "0",
            height: "59vw",
            fontFamily: 'Fraunces, serif'
          }}
          highlightToday={true}
          lang="en"
          primaryColor="#829F91"
          secondaryColor="#f1f4e3"
          todayColor="#829F91"
          textColor="#333333"
          indicatorColor="#FF6820"
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
          sidebarDefault={
            false
          }
          detailDefault={
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
            false
          }
          showAllDayLabel={
            true
          }
          detailDateFormat="dddd, MMMM nth"
        />
      </div>
      <div className='footer-break'>
      <p> </p>
      </div>
      <div className="contact" style={{marginTop: "0"}}>
        <h3 className="contact-title text-white">Contact Us!</h3>
        <p className="text-white">gardenspacemuse@gmail.com
        <br></br>
        University of Washington Capstone 2023
        <br></br>
        ©2023</p>
      </div>
    </div>
  );
}

