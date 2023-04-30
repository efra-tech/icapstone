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
      <div className='section-header' id="header-txt">
        <h1>Our Mission</h1>
      </div>
      <div className='section-body'>
        <p>Welcome to GardenSpace! </p>
        <p> </p>
        <p>A web application developed by a group of Informatics students from the University of Washington. As part of our 
          2023 Capstone project, we've created GardenSpace with the aim of supporting BIPOC (Black, Indigenous, People of Color) 
          urban gardeners and promoting sustainable agriculture in our local communities. Our team is committed to empowering 
          gardeners of all levels by providing a centralized platform for discovering gardening events, connecting with local 
          organizations, and accessing resources. Whether you're a seasoned gardener or just starting out, GardenSpace is 
          here to help you grow your green thumb and discover community in nature.</p>
        <p> </p>
        <p>Find and cultivate yourself in nature with Garden Space!</p>
      </div>
      <div className='section-header'>
        <h1>Urban Gardening in Seattle</h1>
      </div>
      <div className='section-body'>
        <p>Seattle's BIPOC (Black, Indigenous, People of Color) urban gardening scene has a rich history that dates back to the 
          1960s. Back then, community gardens began to sprout up in urban areas as a way to combat poverty and food insecurity. 
          However, not all communities were able to access these resources, and BIPOC folks in particular faced systemic barriers 
          to accessing land and resources. In response, the 1980s and 1990s saw the emergence of organizations like Seattle Tilth 
          and Got Green, which were led by BIPOC community members and sought to empower their communities through sustainable 
          agriculture and environmental justice. Nowadays, groups like the Black Farmers Collective and Urban Farm Collective 
          continue to build upon this legacy by growing fresh, healthy produce and advocating for food justice in Seattle. 
          The BIPOC urban gardening community is a vibrant and important part of Seattle's social and environmental fabric.</p>
      </div>
      <div className='section-header'>
        <h1>Why This Matters</h1>
      </div>
      <div className='section-body'>
        <p>Community-building is a crucial component of the BIPOC urban gardening movement in Seattle. By fostering connections 
          between individuals who may face food insecurity or systemic oppression, gardening can empower communities and create 
          a sense of belonging. GardenSpace recognizes the importance of community-building and is committed to providing spaces 
          where new gardeners can get involved, feel supported, and make lifelong connections. Gardening has a long radical 
          history of liberation, and GardenSpace aims to continue this tradition by creating access points for individuals to 
          join the BIPOC urban gardening community in Seattle. Through community-building and support, GardenSpace hopes to 
          empower individuals and promote a more just and equitable food system in the city. It is only through the support 
          of our community that we may create a brighter future for us all!</p>
      </div>
      <div className="resource">
        <div className="resource-title p-5 text-left text-black">
          <h2 id="banner-title-resource">Learn More About the History of Urban Gardening in Seattle</h2>
          <div className="row">
            <div className="col-sm-6">
              <div className="card btn">
                <div className="card-body" className="d-grid gap-2">
                  <a target="_blank" rel="noreferrer" className="resource-link" href="https://crosscut.com/focus/2020/11/seattles-urban-farmers-are-reclaiming-public-space">Reclaiming Public Space</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card btn">
                <div className="card-body" className="d-grid gap-2">
                  <a target="_blank" rel="noreferrer" className="resource-link" href="https://i-d.vice.com/en/article/88gxq4/yes-farm-seattle-interview">Yes Farms i-D Piece</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="card btn">
                <div className="card-body" className="d-grid gap-2">
                  <a target="_blank" rel="noreferrer" className="resource-link" href="https://southseattleemerald.com/2020/04/28/farming-for-change-black-womxn-farmers-fight-the-pandemic-with-a-food-revolution/">Farming for Change</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card btn">
                <div className="card-body" className="d-grid gap-2">
                  <a target="_blank" rel="noreferrer" className="resource-link" href="https://muse.jhu.edu/book/78593">Public Gardens and Livable Cities</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="card btn">
                <div className="card-body" className="d-grid gap-2">
                <a target="_blank" rel="noreferrer" className="resource-link" href="https://www.seattletimes.com/seattle-news/black-farmers-collective-creates-community-space-for-youth-in-urban-farming-program/">Seattle's Youth Urban Farming Program</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card btn">
                <div className="card-body" className="d-grid gap-2">
                <a target="_blank" rel="noreferrer" className="resource-link" href="https://thehomegarden.com/fun/">Fun Gardening Quizzes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='meet-the-team-section'>
        <div className='section-header meet-the-team-header'>
          <h1>Meet the Team</h1>
        </div>
        <div className='team-imgs'>
          <div className='row footer'>
            <div className='column'>
              <div className='Niha-section'>
                <img className='team-img' src={Niha} alt={"Niha"} />
                <div className='team-text'>
                  <h2>Niha Gaddam</h2>
                  <p>FRONTEND DEV</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='Efra-section'>
                <img className='team-img' src={Efra} alt={"Efra"} />
                <div className='team-text'>
                  <h2>Efra Ahsan</h2>
                  <p>FULLSTACK DEV</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='Andrew-section'>
                <img className='team-img' src={Andrew} alt={"Andrew"} />
                <div className='team-text'>
                  <h2>Andrew Chen</h2>
                  <p>FULLSTACK DEV</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='Easha-section'>
                <img className='team-img gentle-tilt-move-shake' src={Easha} alt={"Easha"} />
                <div className='team-text'>
                  <h2>Easha Dhillon</h2>
                  <p>UX DESIGNER</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='Pranav-section'>
                <img className='team-img' src={Pranav} alt={"Pranav"} />
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