import { React, useState, useEffect } from 'react';
import RevoCalendar from 'revo-calendar';
import { Modal, Form, Button } from "react-bootstrap";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function EventsPage(props) {
  let eventsList = [
    {
      name: "Green Goblins Gardening Onboarding",
      date: Date.now(),
      allDay: true
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

  // "add event" button on details sidebar
  const handleDateClick = (date) => {
    setShowModal(true);
    setDate(date);
  };

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
    <div className='container'>
      <div className='d-flex add-event-btn m-5 align-items-center'>
        <p className='align-self-center float-bottom'>Submit an Event</p>
        <button className='rounded-circle px-3 m-3 btn' onClick={handleClick}>+</button>
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
        addEvent={
          (date) => {
            handleDateClick(date)
          }
        }
      />
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Enter Event Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


//   return (
//     <div>
//       <div className='d-flex add-event-btn m-5 align-items-center'>
//         <p className='align-self-center float-bottom'>Submit an Event</p>
//         <button className='rounded-circle px-3 m-3 btn' onClick={handleClick}>+</button>
//       </div>
//       <RevoCalendar
//         events={eventsList}
//         style={{
//           borderRadius: "5px",
//           border: "5px solid #829F91",
//         }}
//         highlightToday={true}
//         lang="en"
//         primaryColor="#829F91"
//         secondaryColor="#F2F2EC"
//         todayColor="#829F91"
//         textColor="#333333"
//         indicatorColor="#3F5749"
//         animationSpeed={
//           300
//         }
//         sidebarWidth={
//           180
//         }
//         detailWidth={
//           280
//         }
//         showDetailToggler={
//           true
//         }
//         showSidebarToggler={
//           true
//         }
//         onePanelAtATime={
//           false
//         }
//         allowDeleteEvent={
//           false
//         }
//         allowAddEvent={
//           true
//         }
//         openDetailsOnDateSelection={
//           true
//          <button type="button" class="btn btn-light rounded-pill">RSVP</button>
//         }
//         timeFormat24={
//           true
//         }
//         showAllDayLabel={
//           true
//         }
//         detailDateFormat="DD/MM/YYYY"
//       />
//     </div>
//   );


