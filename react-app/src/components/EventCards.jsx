import { React, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Modal, Form, Button } from "react-bootstrap";


export default function EventCardDeck(props){
  return(
    <div className='container-cards row'>
      <div className='d-flex row mb-5'>
        <EventCard name='Green Goblins Gardening Onboarding' date='April 14, 2023' time='5-7pm'
          desc='Hello'
        />
        <EventCard name='Green Goblins Gardening Onboarding' date='April 14, 2023' time='5-7pm'
          desc='Hellooo'
        />
        <EventCard name='Green Goblins Gardening Onboarding' date='April 14, 2023' time='5-7pm'
          desc='Hellooooo'
        />
        <EventCard name='Green Goblins Gardening Onboarding' date='April 14, 2023' time='5-7pm'
          desc='a'
        />
      </div>
    </div>
  );
}

function EventCard(props){

  const [showModal, setShowModal] = useState(false);
  const [formDetails, setFormDetails] = useState({name: '', email: '', numFriends: ''});

  function handleRsvpSubmit(evt){
    console.log('submitted');
    setShowModal(false);
  }

  function handleClick(evt) {
    setShowModal(true);
  };

  function handleNameEntry(evt) {
    const personName = evt.target.value;
    console.log(personName);
    // formDetails.name = personName;
  }

  function  handleEmailEntry(evt) {
    const emailAddress = evt.target.value;
    console.log(emailAddress);
    // formDetails.email = emailAddress;
  }

  function handleRadio(evt){
    console.log(evt.target.id);
    // formDetails.numFriends = null;
  }

  return(
    <Accordion defaultActiveKey="1" className='p-0 m-0 main'>
      <Card className='cardy d-flex'>
        <Card.Header className='card-header'>
          <CustomToggle eventKey="0" name={props.name} date={props.date} time={props.time} >
            learn more
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0" className='card-drop'>
          <Card.Body>
            <p>{props.desc}</p>
            <Button className='px-3 details-btn' onClick={handleClick}>RSVP</Button>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered size='lg'>
              <Modal.Header closeButton>
                <Modal.Title>RSVP to {props.name} on {props.date} from {props.time}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleRsvpSubmit}>
                  <Form.Group className="mb-4" controlId="formPersonName">
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control placeholder="FirstName LastName" onChange={handleNameEntry} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailEntry} />
                    <Form.Text className="text-muted">
                      We'll send you a reminder closer to the event.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>How many people might you bring?</Form.Label>
                    <div key={`default-radio`} className="mb-3 px-3">
                      <Form.Check className="px-4"
                        inline
                        type={'radio'}
                        id={`0`}
                        label={`0`}
                        onClick={handleRadio}
                      />
                      <Form.Check className="px-4"
                        inline
                        type={'radio'}
                        id={`1`}
                        label={`1`}
                        onClick={handleRadio}
                      />
                      <Form.Check className="px-4"
                        inline
                        type={'radio'}
                        label={`2`}
                        id={`2`}
                        onClick={handleRadio}
                      />
                      <Form.Check className="px-4"
                        inline
                        type={'radio'}
                        label={`3+`}
                        id={`3+`}
                        onClick={handleRadio}
                      />
                    </div>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleRsvpSubmit}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

function CustomToggle({ children, eventKey, name, date, time }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('accordian opened!'),
  );

  return (
    <div>
      <div className='col-9 py-4 card-details'>
        <h4>{name}</h4>
        <p>{date}</p>
        <p>{time}</p>
        <button
          type="button"
          className='px-3 details-btn'
          onClick={decoratedOnClick}
        >
          {children}
        </button>
      </div>
    </div>
  );
}
