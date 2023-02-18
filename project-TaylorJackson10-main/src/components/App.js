import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { NavBar } from './Nav';
import { PageHead } from './Header';
import { Forums, NewPost, ShowPost, FilterGenre } from './Forums.js';
import { Events, NewEvent } from './Events.js';
import Footer from './Footer.js';
import Login from './Login.js';
import '../style.css';

import FORUM_OPTIONS from '../data/options.json';
import FORUM_POSTS from '../data/posts.json';
import EVENTS from '../data/events.json';
import GENRES from '../data/genres.json'
import LOCATIONS from '../data/locations.json'

export default function App(props) {
    return (
        <div>
            <NavBar />
            <PageHead />

            <main>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Events cards={EVENTS} />} />
                        <Route path="/newevent" element={<NewEvent genres={GENRES} locations={LOCATIONS}/>} />
                        <Route path="/forums" element={<Forums posts={FORUM_POSTS} forums={FORUM_OPTIONS} />} />
                        <Route path="/forums/newpost" element={<NewPost genres={FORUM_OPTIONS} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forums/post/:postID" element={<ShowPost />}/>
                        <Route path="/forums/:genre" element={<FilterGenre />}/>
                    </Routes>
                </Router>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
