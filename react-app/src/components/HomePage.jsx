import React from 'react';
import style from "./HomePage.css";
import carousel1 from "../imgs/carousel\ 1.png"
import carousel2 from "../imgs/carousel\ 2.png"
import carousel3 from "../imgs/carousel\ 3.png"

export default function HomePage(props) {
  return (
    <div className="homepage">
      <div className="banner">
        <div className="bg-image p-5 text-left text-black">
          <h1 id="banner-title"><br></br>GARDENSPACE</h1>
        </div>
      </div>

      <div className="message">
        <div className="row">
          <div className="col-5 d-flex flex-column p-0">
            <p></p>
            <h2 className="message-title align-self-center p-5">Welcome to GardenSpace!</h2>
            <p></p>
          </div>
          <div className="col-7">
            <p className="message-text">GardenSpace is a welcoming community for BIPOC (Black, Indigenous, and People of Color)
            urban gardeners in Seattle. Our goal is to create a safe space where gardeners can connect with local gardens,
            discover new events, and access information about local organizations. We believe that gardening should be a
            collaborative and inclusive experience, and we're dedicated to helping you find a community that shares your passion.
            </p>
          </div>
        </div>
        <p className="message-final">Find and cultivate yourself in nature with GardenSpace!</p>
      </div>
      <div className='section-header'>
            <h1>Project Overview</h1>
      </div>
      <div className='section-body'>
        <p>GardenSpace is a web application developed by a team of the University of Washington iSchool students as
          part of their Capstone Program. The team, consisting of Pranav Shekar, Niha Gaddam, Andrew Chen, Efra Ahsan,
          and Easha Dhillon, worked on the project from January 2023 to June 2023. The web application’s mission is to
          connect BIPOC urban gardeners in Seattle who may feel disconnected from the larger urban gardening community
          in the city. GardenSpace aims to empower individuals by fostering connections and providing access points for
          individuals to join the BIPOC urban gardening community.</p>
      </div>

      {/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://d23.com/app/uploads/2015/07/23-jobs-donald-duck-has-tried_OMD-feat-1-780x440-1440537749.jpg" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.fortressofsolitude.co.za/wp-content/uploads/2023/01/Donald-Duck-Disney.jpeg" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://nationaltoday.com/wp-content/uploads/2021/06/donald_duck.jpg" alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}

      <div id="homeCarousel" className="carousel slide pointer-event" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-image">
              <img className="d-block w-100" src={carousel3} alt="First slide"/>
            </div>
            <div className="container">
              <div className="carousel-caption">
                {/* <h1>Image 1</h1> */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image">
              <img className="d-block w-100" src={carousel2} alt="Second slide"/>
            </div>
            <div className="container">
              <div className="carousel-caption">
                {/* <h1>Image 2</h1> */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image">
              <img className="d-block w-100" src={carousel1} alt="Third slide"/>
            </div>
            <div className="container">
              <div className="carousel-caption">
                {/* <h1>Image 3</h1> */}
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      <div className="contact">
        <h3 className="contact-title text-white">Contact us!</h3>
        <p className="text-white">gardenspacemuse@gmail.com
        <br></br>
        University of Washington Capstone 2023
        <br></br>
        ©2023</p>
      </div>
    </div>
  );
}