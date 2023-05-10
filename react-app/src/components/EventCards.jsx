import { React, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Modal, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faLink, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import logo from '../imgs/logo.png'


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
    <div className='container-cards justify-content-between'>
      <div style={{backgroundColor: '#BDC8BF', paddingTop: '7%', borderTop: "10px solid #B0BEB3", borderBottom: "10px solid #B0BEB3"}}>
        <div className='d-flex row card-row'>
          <EventCard name='Green Goblins Gardening Onboarding' date='May 18, 2023' time='5-7pm'
            desc="What’s so special about flowers? Three different stories cover the botanical, the poetic, and the soul-sustaining qualities of flowers in this month’s virtual story time videos. Visit the library to color a flower picture anytime this month."
            link='https://www.google.com/search?q=hello&rlz=1C5CHFA_enUS924US924&source=lnms&tbm=isch&sa=X&ved=2ahUKEwik9vjV8Ob-AhUeMzQIHayfCfwQ0pQJegQIBRAE&biw=1440&bih=821&dpr=2#imgrc=wYUVME2ids7u2M'
          />
          <EventCard name='Green Goblins Gardening Onboarding' date='May 21, 2023' time='4-7pm'
            desc="What’s so special about flowers? Three different stories cover the botanical, the poetic, and the soul-sustaining qualities of flowers in this month’s virtual story time videos. Visit the library to color a flower picture anytime this month."
            link=''
          />
          <EventCard name='Summer Prep Workshop for Kids' date='May 24, 2023' time='10-2pm'
            desc="What’s so special about flowers? Three different stories cover the botanical, the poetic, and the soul-sustaining qualities of flowers in this month’s virtual story time videos. Visit the library to color a flower picture anytime this month."
            link=''
          />
          <EventCard hideClass={cardStackClass} name='Pumkin Harvest at Parlington' date='June 2, 2023' time='10-4pm'
            desc="What’s so special about flowers? Three different stories cover the botanical, the poetic, and the soul-sustaining qualities of flowers in this month’s virtual story time videos. Visit the library to color a flower picture anytime this month."
          />
        </div>
        <button onClick={handleAngleClick} className='angle-btn'><FontAwesomeIcon icon={faAngleDown} style={{color: '#2D3935', height: "3rem", transform: angleTransformClass, marginBottom: '3rem'}}/></button>
      </div>
    </div>
  );
}

function EventCard(props){

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [formDetails, setFormDetails] = useState({name: '', email: '', numFriends: '', notes: ''});

  function handleRsvpSubmit(evt){
    evt.preventDefault();
    setShowModal(false);
    setShowModal2(true);
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
            {props.link && <button onClick={() => window.open(props.link, "_blank", "noreferrer")} className='link-btn'><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: '#2D3935', height: "1.3rem"}}/></button>}
            <Button className='px-3 rsvp-btn' onClick={handleClick}>RSVP</Button>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered size='lg'>
              <Modal.Header closeButton style={{textDecoration: 'wavy overline #d9f463'}}>
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
            <Modal show={showModal2} onHide={() => setShowModal2(false)} centered size='lg' className='confirmation'>
              <Modal.Header style={{fontStyle: 'bold', textShadow: '5px 10px 10px gray'}}>
                <img src={logo} alt="gardenspace logo" height={200} />
                <Modal.Title className='modal-title text-center'>See ya later at <i>{props.name}</i> on { props.date.slice(0, -6) } from {props.time} !!!</Modal.Title>
              </Modal.Header>
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
