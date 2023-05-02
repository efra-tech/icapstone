import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './Nav';
import HomePage from './HomePage';
import MapPage from './MapPage';
import EventsPage from './EventsPage';
import BulletinPage from './BulletinPage';
import AboutPage from './AboutPage';


export default function App(props) {

  const [showCard, setCard] = useState(false);
  const [gardenID, setGarden] = useState(0);
  const [searchTerm, setSearch] = useState("");


  return (
    <div id='body'>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path='/home' element={ <HomePage /> } />
          <Route path='/map' element={
            <MapPage showCard={showCard} setCard={setCard} gardenID={gardenID} setGarden={setGarden} searchTerm={searchTerm} setSearch={setSearch} /> } />
          <Route path='/get-involved' element={ <EventsPage /> } />
          <Route path='/about-us' element={ <AboutPage /> } />
          <Route path='*' element={ <Navigate to='/home' /> } />
        </Routes>
      </main>
    </div>
  );
}