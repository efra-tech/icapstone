import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './Nav';
import HomePage from './HomePage';
import MapPage from './MapPage';
import EventsPage from './EventsPage';
import BulletinPage from './BulletinPage';
import AboutPage from './AboutPage';


export default function App(props) {
  return (
    <div id='body'>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path='home' element={ <HomePage /> } />
          <Route path='map' element={ <MapPage /> } />
          <Route path='events' element={ <EventsPage /> } />
          <Route path='bulletin' element={ <BulletinPage /> } />
          <Route path='about-us' element={ <AboutPage /> } />
          <Route path='*' element={ <Navigate to='home' /> } />
        </Routes>
      </main>
    </div>
  );
}