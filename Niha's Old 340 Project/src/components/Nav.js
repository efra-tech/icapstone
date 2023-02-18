import React from 'react';
import EventIcon from '@mui/icons-material/Event';
import ForumIcon from '@mui/icons-material/Forum';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';


export function NavBar() {
    return(
    <nav>
        <ul>
            <li>
            <OverlayTrigger placement="bottom" overlay={
            <Tooltip id="events">
             <strong>Events</strong>
            </Tooltip>
             }>
                <a href="/" className="navlink"><EventIcon className="eventicon" alt="event icon" /></a>
            </OverlayTrigger>
            </li>
            <li>
            <OverlayTrigger placement="bottom" overlay={
            <Tooltip id="forums">
             <strong>Forums</strong>
            </Tooltip>
             }>
                <a href="/forums" className="navlink"><ForumIcon className="forumicon" alt="forums icon" /> </a>
                </OverlayTrigger>
            </li>
            <li>
            <OverlayTrigger placement="bottom" overlay={
            <Tooltip id="user-profile-icon">
             <strong>Profile</strong>
            </Tooltip>
             }>
                <a href="/login" className="navlink"><AccountBoxIcon className="usericon" alt="user profile icon" /> </a>
                </OverlayTrigger>
            </li>
        </ul>
    </nav>
);
}

