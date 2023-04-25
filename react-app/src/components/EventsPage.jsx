import { React, useState, useEffect } from 'react';
import RevoCalendar from 'revo-calendar';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import EventCard from './EventCards.jsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function EventsPage(props) {
  const rsvpIconStr = "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z";

  let eventsList = [
    {
      name: "Green Goblins Gardening Onboarding",
      date: Date.parse('18 April 2023 17:00:00 GMT-7'),
      allDay: false,
      extra: {
        icon: rsvpIconStr,
        text: '9 RSVPs'
      }
    },
    {
      name: "Green Goblins Gardening Onboarding",
      date: Date.parse('21 April 2023 16:00:00 GMT-7'),
      allDay: false,
      extra: {
        icon: rsvpIconStr,
        text: '10 RSVPs'
      }
    },
    {
      name: "Summer Prep Workshop for Kids",
      date: Date.parse('24 April 2023 10:00:00 GMT-7'),
      allDay: false,
      extra: {
        icon: rsvpIconStr,
        text: '12 RSVPs'
      }
    },
    {
      name: "Pumkin Harvest at Parlington",
      date: Date.parse('02 Oct 2023 10:00:00 GMT-7'),
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
    <div className='container-main mt-5'>
      <div>
        <Carousel
          responsive={responsive}
          centerMode={true}
          // focusOnSelect={true}
          infinite={true}          //do we want infinite?
          keyBoardControl={true}
          customTransition="all .5"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          className="card-carousal"
        >
          <EventCard name='Green Goblins Gardening Onboarding' date='April 18, 2023' time='5-7pm'
          desc='Lorem ipsum vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
          />
          <EventCard name='Green Goblins Gardening Onboarding' date='April 21, 2023' time='4-7pm'
            desc='Lorem ipsum vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.'
          />
          <EventCard name='Summer Prep Workshop for Kids' date='April 24, 2023' time='10-2pm'
            desc='Lorem ipsum vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique.'
          />
          <EventCard name='Pumkin Harvest at Parlington' date='October 2, 2023' time='10-4pm'
            desc='Lorem ipsum vero eos et accusamus et iusto odio dignissimos ducimus qui.'
          />
        </Carousel>
      </div>
      <div className='calendar-container lead'>
        <div className='btn-container' style={{backgroundColor: "#2A3B37"}}>
          <button className='mb-5 add-event-btn' onClick={handleClick}>Submit an Event</button>
        </div>
        <RevoCalendar
          events={eventsList}
          style={{
            borderRadius: "1px",
            borderRight: "57px solid #2A3B37",
            borderLeft: "57px solid #2A3B37",
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
    </div>
  );
}

