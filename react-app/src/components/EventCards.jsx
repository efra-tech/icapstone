import { React, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Modal, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faLink, faArrowUpRightFromSquare, faPaperclip } from '@fortawesome/free-solid-svg-icons';
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
    <div className='container-cards'>
      <div style={{backgroundColor: '#BDC8BF', paddingTop: '7%', borderTop: "10px solid #B0BEB3", borderBottom: "10px solid #B0BEB3"}}>
        <div className='d-flex row card-row justify-content-around'>
          <EventCard name='YesFarm Volunteer Day' date='June 3, 2023' time='10am-3pm'
            desc="Come out to YesFarm for their volunteer days! Come down to YesFarm to volunteer, read, play, seed swap, lay in the sun, make friends, and have lovely conversations with the community. This year, we wish to encourage and highlight slowing down and continue to encourage folkx to exist in the space in whatever way feels good to them. Kick off the 2023 season with familiar faces and new faces! Bring a friend & tell a friend."
            link='https://www.blackfarmerscollective.com/new-events/yesfarm-volunteer-day-1'
          />
          <EventCard name='UW Farm Volunteer Party' date='June 9, 2023' time='1pm-4pm'
            desc="Come down to the UW Farm and help grow sustainable and organic produce! Activities include; planting, weeding, harvesting, and helping farm staff with projects that help the farm function at its best! Event interval: Single-day event. Campus location: Center for Urban Horticulture. For more info visit botanicgardens.uw.edu."
            link=''
          />
          <EventCard name='Gardens for BIPoC' date='June 10, 2023' time='10:30am-12pm'
            desc="Gardens for BIPoC is a new, free monthly tour that takes place in the Washington Park Arboretum, serving folks that identify as Black, Indigenous, and/or a person of color. UW Botanic gardens hope that these free tours can help remove some barriers BIPoC folks may have to access our gardens as well as create a safe and inviting space for BIPoC to connect with one another in nature! The tours include a casual walk through various areas of the Washington Park Arboretum, feature seasonal viewing of collections plants, explorations of botany, and the cultural significance and history of each plant for the BIPoC community will be highlighted along with the history of the UW Botanic Gardens.  UW Botanic Gardens is committed to enriching the lives of all community members with free public tours."
            link='https://queertheland.org/'
          />
          </div>
          <div className='d-flex row card-row justify-content-around' >
          <EventCard hideClass={cardStackClass} name='Juneteenth BIPOC Cookout' date='June 17, 2023' time='12pm-7pm'
            desc="Details coming soon!" link=''
          />
          <EventCard hideClass={cardStackClass} name='Yes Farm Volunteer Day' date='June 24, 2023' time='10am-3pm'
            desc="Come down to YesFarm to volunteer, read, play, seed swap, lay in the sun, make friends, and have lovely conversation with community. This year, we wish to encourage and highlight slowing down and continue to encourage folkx to exist in the space in whatever ways feels good to them."
            link='https://www.blackfarmerscollective.com/new-events/yesfarm-volunteer-day-1'
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
            {props.link && <button onClick={() => window.open(props.link, "_blank", "noreferrer")} className='link-btn'><FontAwesomeIcon icon={faPaperclip} style={{color: '#2D3935', height: "1.45rem"}}/></button>}
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
