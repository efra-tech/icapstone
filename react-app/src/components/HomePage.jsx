import React from 'react';
import style from "./HomePage.css";
import carousel1 from '../imgs/carousel\ 1.png'
import carousel2 from '../imgs/carousel\ 2.png'
import carousel3 from '../imgs/carousel\ 3.png'

export default function HomePage(props) {
  return (
    <div className="homepage">

      <div className="banner">
        <div className="bg-image p-5 text-left text-black">
          <h1 id="banner-title">Garden Space</h1>
        </div>
      </div>

      {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://d23.com/app/uploads/2015/07/23-jobs-donald-duck-has-tried_OMD-feat-1-780x440-1440537749.jpg" alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://www.fortressofsolitude.co.za/wp-content/uploads/2023/01/Donald-Duck-Disney.jpeg" alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://nationaltoday.com/wp-content/uploads/2021/06/donald_duck.jpg" alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> */}

      <div id="homeCarousel" class="carousel slide pointer-event container" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="carousel-image">
              <img class="d-block w-100" src={carousel1} alt="First slide"/>
            </div>
            <div class="container">
              <div class="carousel-caption">
                <h1>Image 1</h1>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="carousel-image">
              <img class="d-block w-100" src={carousel2} alt="Second slide"/>
            </div>
            <div class="container">
              <div class="carousel-caption">
                <h1>Image 2</h1>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="carousel-image">
              <img class="d-block w-100" src={carousel3} alt="Third slide"/>
            </div>
            <div class="container">
              <div class="carousel-caption">
                <h1>Image 3</h1>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      <div className="message">
        <h2 className="message-title">Welcome to GardenSpace!</h2>
        <p className="message-text">GardenSpace aims to create a safe space for BIPOC community gardeners and connect with their local gardens
          by alerting them about events, giving information about local organizations, or to highlight education opportunities.
          We want to get you gardening with a community you love.
          <br></br>
          <br></br>
          Find and cultivate yourself in nature with Garden Space!</p>
      </div>

      <div className="resource">
        <div className="resource-title p-5 text-left text-black">
          <h2 id="banner-title">Additional Resources</h2>
          <div class="row">
            <div class="col-sm-6">
              <div class="card btn">
                <div class="card-body">
                  Resource Link Number One
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card btn">
                <div class="card-body">
                  Resource Link Number Two
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="card btn">
                <div class="card-body">
                  Resource Link Number Three
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card btn">
                <div class="card-body">
                  Resource Link Number Four
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="card btn">
                <div class="card-body">
                  Resource Link Number Five
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card btn">
                <div class="card-body">
                  Resource Link Number Six
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <h3 className="contact-title text-white">Contact us!</h3>
        <p className="text-white">teammuse@gmail.com
        <br></br>
        University of Washington Capstone 2023
        <br></br>
        © 2023</p>
      </div>
    </div>
  );
}