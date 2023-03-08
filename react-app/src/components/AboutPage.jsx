import React from 'react';
import style from './AboutPage.css';
import header from '../imgs/about-us-header.jpeg';
import Niha from '../imgs/niha-pic.png'
import Efra from '../imgs/efra-pic.png'
import Andrew from '../imgs/andrew-pic.png'
import Easha from '../imgs/eash-pic.png'
import Pranav from '../imgs/pranav-pic.JPG'


export default function AboutPage(props) {


  return (
    <div className='about-us-page'>
      <div className="header-img p-5 text-left text-black"></div>
      <div className='section-header'>
        <h1>Our Mission</h1>
      </div>
      <div className='section-body'> 
        <p>Welcome to GardenSpace! </p>
        <p> </p>
        <p>We are a group of Informatics students at the University of Washington dedicated to contributing to our local BIPOC 
        community gardens. Through this web application, we hope to provide BIPOC urban gardeners, whether new or experienced, 
        with a way to stay connected with their local gardens and farms. GardenSpace aims to connect users with their gardens 
        by alerting them about events, giving information about local organizations, or to highlight education opportunities. 
        We want to get you gardening with a community you love.</p>
        <p> </p>
        <p>Find and cultivate yourself in nature with Garden Space!</p>
      </div>
      <div className='section-header'>
        <h1>Why this Matters</h1>
      </div>
      <div className='section-body'>
        <p>Community is an important aspect of not only fostering lifelong friendships, passion for gardening, and learning, 
        but also for empowerment among people who may face food insecurity or systemic oppression.</p>
        <p> </p>
        <p>The folks at GardenSpace strongly believe that community-building and creating spaces for people to work together 
        is how we move forward. Gardening has long had a liberating and radical history; we want to ensure this history 
        continues by providing spaces of access for new gardeners to get involved and feel supported.</p>
      </div>
      <div className='section-header'>
        <h1>Future Vision</h1>
      </div>
      <div className='section-body'>
        <p>We hope that our solution will encourage new and experienced BIPOC urban gardeners alike to come together to form 
        valuable bonds as well as participate in an exchange of knowledge and shared love for gardening. We can't wait to 
        see what you grow. </p>
      </div>
      <section className='meet-the-team-section'>
        <div className='section-header meet-the-team-header'>
          <h1>Meet the Team</h1>
        </div>
        <div className='team-imgs'>
          <div className='row'>
            <div className='column'>
              <div className='Niha-section'>
                <img id='team-img' src={Niha} alt={"Niha"} />
                <div className='team-text'>
                  <h2>Niha Gaddam</h2>
                  <p>DATA SCIENTIST</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='Efra-section'> 
                <img id='team-img' src={Efra} alt={"Efra"} />
                <div className='team-text'>
                  <h2>Efra Ahsan</h2>
                  <p>FRONTEND DEV</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='Andrew-section'>
                <img id='team-img' src={Andrew} alt={"Andrew"} />
                <div className='team-text'>
                  <h2>Andrew Chen</h2>
                  <p>BACKEND DEV</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='Easha-section'>
                <img id='team-img' src={Easha} alt={"Easha"} />
                <div className='team-text'>
                  <h2>Easha Dhillon</h2>
                  <p>UX DESIGNER</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='Pranav-section'>
                <img id='team-img' src={Pranav} alt={"Pranav"} />
                <div className='team-text'>
                  <h2>Pranav Shekar</h2>
                  <p>PROJECT MANAGER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}