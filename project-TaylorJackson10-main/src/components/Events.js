import React, { useState, useEffect } from 'react';
import { GrLocation } from 'react-icons/gr';
import { BsCalendarDate } from 'react-icons/bs';
import { CgMusicNote } from 'react-icons/cg';
import { BrowserRouter, Link } from 'react-router-dom'
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {Container, Col, Row, Form, Button, FloatingLabel} from 'react-bootstrap';

// Creates event card 
export function Events(props){

  // Event state
  const [eventsState, setEvents] = useState({})

  // get the posts
  useEffect(() => {
    const db = getDatabase();
    const eventCardRef = ref(db, "events");
    onValue(eventCardRef, (snapshot) => {
        if (snapshot.exists()) {
            setEvents(snapshot.val());
        } else {
          console.log("No data available");
        }
      });
  }, []);

  const currEvents = eventsState;
  const currEventKeys = Object.keys(currEvents);
  const currEventArray = currEventKeys.map((key) => {
    const singleEventCopy = {...currEvents[key]}
    singleEventCopy.key = key;
    return singleEventCopy;
  });

  // Filter hook
  const [filters, setFilters] = useState({
    neighborhood: "",
    date: "",
    genre: "",
  });

  // Filter setter
  const handleFilterChange = (key,value) => {
    setFilters(filters => ({
      ...filters,
      [key]: value
    }))
  }

  let filterElem = <Filter filters={filters} onChange={handleFilterChange} />; 

  let bigEventElem = currEventArray.filter(card => {
    const { neighborhood, date, genre } = filters
  
    const genreShouldShow = (genre.length === 0 || genre === card.genre)
    const neighborhoodShouldShow = (neighborhood.length === 0 || neighborhood === card.location)
    const dateShouldShow = (date.length === 0 || date === card.date)

    return genreShouldShow && neighborhoodShouldShow && dateShouldShow
    
    }).map(currCard => {
      return <BigCard card={currCard} key={currCard.id} />
  });

  return (
    <main>
      <div className='filter'>
        {filterElem}
      </div>
      <div className='create-card-container'>
        <div className='create-card'>
          <Link to="../newevent"><input type="button" value="New Event" /></Link>
        </div>
      </div>
      <div className='event-container'>
        <section>
          {/*White space section*/}
        </section>
        <section>    
          {bigEventElem}
        </section>
        <section>
          {/*White space section*/}
        </section>
      </div>
    </main>
  );
}

export function Filter(props) {
  const { filters} = props

  const onChange = (key, value) => {
    props.onChange(key,value);
  }

  return (
    <form className="event-filter">
      <h2>Event Filter</h2>
        <div className="filter-items">
            <div className="input-items">
              <label htmlFor="neighborhood-input">Location</label>
              <select id="neighborhood-input" name="neighborhood_input" value={filters.neighborhood} onChange={(event) => onChange('neighborhood', event.target.value)}>
                <option value="">Select Location</option>
                <option value="Central District">Central District</option>
                <option value="Udistrict">Udistrict</option>
                <option value="Ballard">Ballard</option>
                <option value="Downtown">Downtown</option>
                <option value="Queen Anne">Queen Anne</option>
                <option value="Cap Hill">Cap Hill</option>
                <option value="Green Lake">Green Lake</option>     
                <option value="SoDo">SoDo</option>
              </select>
            </div> 
            <div className="input-items">
                <label htmlFor="date-input">Date</label>
                <input type="date" id="date-input" name="event_date" min="2021-01-01" max="2023-12-31" value={filters.date} onChange={(event) => onChange('date', event.target.value)}/>
            </div>
            <div className="input-items">
              <label htmlFor="genre-input">Genre</label>
              <select id="genre-input" name="genre_input" value={filters.genre} onChange={(event) => onChange('genre', event.target.value)}>
              <option value="">Select Genre</option>
                <option value="Alternative">Alternative</option>
                <option value="Country">Country</option>
                <option value="Electronic">Electronic</option>
                <option value="Hip Hop">Hip Hop</option>
                <option value="Indie">Indie</option>
                <option value="Jazz">Jazz</option>
                <option value="Pop">Pop</option>
                <option value="R&B">R&B</option>
                <option value="Rock">Rock</option>
              </select>
            </div>
        </div>
    </form>
  )
}

export function BigCard(props) {
    const card = props.card;
    const img = card.img;
    const name = card.band;
    const alt = card.alt;
    const location = card.location;
    const date = card.date;
    const genre = card.genre;
    const desc = card.eventContent;

    return (
      <div className='big-card'>
        <img src={img} alt={alt} />
        <div className='text-content'>
          <p>{name}</p>
          <i>
            <p>
              <GrLocation title="Location Pin Icon"/>
              {location}
            </p>
          </i>
          <i>
            <p>
              < BsCalendarDate title="Calendar Icon"/>
              {date}
            </p>
          </i>
          <i>
            <p>
              < CgMusicNote title="Music Note Icon"/>
              {genre}
            </p>
          </i>
          <p>{desc}</p>
        </div>
      </div>
    )
}

export function NewEvent(props) {
  let genreElem = props.genres.map((currGenre, index) => {
    return <option value={currGenre.genre} key={index}>{currGenre.genre}</option>
  })

  let locationElem = props.locations.map((currLoc, index) => {
    return <option value={currLoc.location} key={index}>{currLoc.location}</option>
  })

  const [currUser, setUser] = useState();
  const [eventError, setEventError] = useState(null);

  const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
    });

  const handleSubmit = (event) => {
    if (currUser) {
      event.preventDefault();
      const band = event.target.bandName.value;
      const bandImage = event.target.bandImage.value;
      const alt = event.target.alt.value;
      const date = event.target.date.value;
      const location = event.target.location.value;
      const genre = event.target.genre.value;
      const eventContent = event.target.eventContent.value;
      const db = getDatabase();

      set(push(ref(db, "events")), {
          band: band,
          img: bandImage,
          alt: alt,
          date: date,
          location: location,
          genre: genre,
          eventContent: eventContent
      });

        
    } else {
        const errorMessage = "Cannot make post! User is not logged in."
        console.log("something went wrong with user");
        setEventError(errorMessage);
    }

  }

  return (
    <div className="event-form">
    <Container className="mt-9">
       
      <Row>
      <h2>Create an Event Below!</h2>
      <Col className="text-center mt-10 p-5">
        
    <Form onSubmit={handleSubmit}>
    <Col xs="auto">
    <Form.Group controlId="bandNameInput">
    <FloatingLabel controlId="floatingInput"
    label="Band Name"
    className="mb-3">
        <Form.Control type="bandName" placeholder="Enter Band Name" name="bandName" />
        </FloatingLabel>
      </Form.Group>
      </Col>

      <Col xs="auto">
      <Form.Group controlId="bandImageInput" className="mb-3">
    <FloatingLabel controlId="floatingTextarea"
    label="Band Image URL"
    className="mb-3">
        <Form.Control type="url" placeholder="Band Image" name="bandImage"/>
        </FloatingLabel>
      </Form.Group>
      </Col>
    
      <Col>
    <Form.Group controlId="bandImageAltInput" className="mb-3">
    <FloatingLabel controlId="floatingInput"
    label="Image Description"
    className="mb-3">
        <Form.Control type="alt" placeholder="Image Description" name="alt" />
        </FloatingLabel>
      </Form.Group>
      </Col>

      <Col xs="auto">
      <Form.Group controlId="dateInput" className="mb-3">
      <FloatingLabel controlId="floatingInput"
    label="Date"
    className="mb-3">
        <Form.Control type="date" name='date' />
        </FloatingLabel>
        </Form.Group>
      </Col>

      <Col xs="auto">
      <Form.Group controlId="locationInput" className="mb-3">
      <FloatingLabel controlId="floatingSelect" label="Location">
        <Form.Select  aria-label="Floating label" name="location" id="location">
        <option>Select Neighborhood</option>
          {locationElem}
        </Form.Select>
        </FloatingLabel>
      </Form.Group>
      </Col>

      <Col xs="auto">
      <Form.Group controlId="genreInput" className="mb-3">
      <FloatingLabel controlId="floatingSelect" label="Genre">
          <Form.Select aria-label="Floating label" name="genre" id="genre">
            {genreElem}
          </Form.Select>
          </FloatingLabel>
      </Form.Group>
      </Col>

      <Col xs="auto">
      <Form.Group controlId="contentInput" className="mb-3">
      <FloatingLabel controlId="floatingSelect" label="Band Description">
      <Form.Control
      as="textarea"
      placeholder="Write your description here"
      style={{ height: '100px' }}
      name="eventContent"
      />
      </FloatingLabel>
      </Form.Group>
      </Col>
      <Button variant="primary btn-block" type="submit" className="login-button mt-2">
    Submit Event (Only Click Once!)
  </Button>

    </Form>
    </Col>
    </Row>
    </Container>
    <ErrorHandler error={eventError} />
    </div>
  )
}

function ErrorHandler(props) {
  if(props.error === undefined) {
      return null;
  } else {
      return (
          <h2 className="error-alert">{props.error}</h2>
      );
  }
}