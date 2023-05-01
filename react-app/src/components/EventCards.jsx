import { React, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Modal, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


export default function EventCardDeck(props){

  const [angleBtnDown, setAngleBtn] =  useState(true);
  const [cardStackClass, setCardStackClass] = useState(' hide-card')

  function handleAngleClick(evt){
    if(angleBtnDown === true){
      setAngleBtn(false);
      setCardStackClass(' show-card');
    } else {
      setAngleBtn(true);
      setCardStackClass(' hide-card');
    }
  }

  let angleTransformClass = 'scale(1.5,1)';
  if(angleBtnDown === false){
    angleTransformClass = 'scale(1.5,1) rotate(180deg)'
  }

  return(
    <div className='container-cards'>
      <div style={{backgroundColor: '#BDC8BF', paddingTop: '7%', borderTop: "10px solid #B0BEB3", borderBottom: "10px solid #B0BEB3"}}>
        <div className='d-flex row'>
          <EventCard name='Green Goblins Gardening Onboarding' date='April 18, 2023' time='5-7pm'
            desc='Lorem ipsum vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
          />
          <EventCard name='Green Goblins Gardening Onboarding' date='April 21, 2023' time='4-7pm'
            desc='Lorem ipsum vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.'
          />
          <EventCard name='Summer Prep Workshop for Kids' date='April 24, 2023' time='10-2pm'
            desc='Lorem ipsum vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique.'
          />
          <EventCard hideClass={cardStackClass} name='Pumkin Harvest at Parlington' date='October 2, 2023' time='10-4pm'
            desc='Lorem ipsum vero eos et accusamus et iusto odio dignissimos ducimus qui.'
          />
        </div>
        <button onClick={handleAngleClick} className='angle-btn'><FontAwesomeIcon icon={faAngleDown} style={{color: '#2D3935', height: "3rem", transform: angleTransformClass, marginBottom: '3rem'}}/></button>
      </div>
    </div>
  );
}

function EventCard(props){

  const [showModal, setShowModal] = useState(false);
  const [formDetails, setFormDetails] = useState({name: '', email: '', numFriends: '', notes: ''});

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

  function handleDetailEntry(evt){
    const notes = evt.target.value;
    console.log(notes);
    // formDetails.notes = notes;
  }

  return(
    <Accordion defaultActiveKey="1" className={'mx-4 ml-4 col-md-9 my-2' + (props.hideClass && props.hideClass)} style={{width: "25rem"}}>
      <Card className='cardy d-flex'>
        <Card.Header className='card-header'>
          <CustomToggle eventKey="0" name={props.name} date={props.date} time={props.time} >
            event details
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0" className='card-drop'>
          <Card.Body>
            <p>{props.desc}</p>
            <Button className='px-3 rsvp-btn' onClick={handleClick}>RSVP</Button>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered size='lg'>
              <Modal.Header closeButton>
                <Modal.Title className='modal-title'>RSVP to {props.name} on { props.date.slice(0, -6) } !!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleRsvpSubmit}>
                  <Form.Group className="mb-4" controlId="formPersonName">
                    <Form.Label>First and last name</Form.Label>
                    <Form.Control placeholder="Enter name" onChange={handleNameEntry} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailEntry} />
                  </Form.Group>
                  <Form.Group className="mb-3 mt-5">
                    <Form.Label>How many people might you bring?</Form.Label>
                    <div key={`default-radio`} className="mb-3 radios">
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
                  <Form.Group className="mb-3 form-extra-text" controlId="form-text-area">
                    <Form.Label>Questions/Comments/Concerns?</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="Enter them here" onChange={handleDetailEntry} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button className='cancel-btn' onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button className='submit-btn' onClick={handleRsvpSubmit}>
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
