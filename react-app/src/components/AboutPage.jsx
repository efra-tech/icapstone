import React from 'react';
import style from './AboutPage.css';
import tilth_origins from '../imgs/tilth_origins.png'
import tilth_harvest_fair from '../imgs/tilth_harvest_fair.jpg'
import black_farmers_collective_1 from '../imgs/black_farmers_collective_1.png'
import black_farmers_collective_2 from '../imgs/black_farmers_collective_2.png'
import got_green_2008 from '../imgs/got_green_2008.png'
import bloom_giving_garden from '../imgs/bloom_giving_garden.jpg'
import Niha from '../imgs/niha-pic.png'
import Efra from '../imgs/efra-pic.png'
import Andrew from '../imgs/andrew-pic.png'
import Easha from '../imgs/eash-pic.png'
import Pranav from '../imgs/pranav-pic.JPG'
import Card from './ResourceCards.jsx';
import logo from '../imgs/logo.png';

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
        <p style={{fontWeight: '800'}}>Cultivate yourself and your block with Garden Space!</p>
      </div>
      <div className="logo">
      <img className='logo-img p-0' src={logo} alt={"garden space logo"} style={{width: '35%', marginLeft: '63%', transform: 'scaleX(-1)'}} />
      </div>
      <div className='section-header pt-0'>
        <h1>Urban Gardening in Seattle</h1>
      </div>
      <div className='section-body'>
        <p>Seattle's BIPOC (Black, Indigenous, People of Color) urban gardening scene has a rich history that dates back to the 1960s.
          Back then, community gardens began to sprout up in urban areas as a way to combat poverty and food insecurity. However,
          not all communities were able to access these resources, and BIPOC folks in particular faced systemic barriers to accessing
          land and resources. In response, the 1980s and 1990s saw the emergence of organizations like Seattle Tilth (now Tilth Alliance),
          which were led by BIPOC community members and sought to empower their communities through sustainable agriculture and environmental
          justice.
        </p>
        <div class="container">
          <div class="row">
              <div class="col-sm-6 about-garden-col">
                <img class="about-garden-img img-responsive" src={tilth_origins} alt="Meeting at Pragtree Farm, August, 27, 1977"/>
                <p className="about-garden-text">Pragtree Farm, August, 27, 1977. Meeting where "Tilth" was coined. (Photo by Jef Jaisun)</p>
              </div>
              <div class="col-sm-6 about-garden-col">
                <img class="about-garden-img img-responsive" src={tilth_harvest_fair} alt="Tilth Alliance 2007 Harvest Fair"/>
                <p className="about-garden-text">Seattle Tilth is called Tilth Alliance today, and they often run community events. This photo is from their 2007 Harvest Fair.</p>
              </div>
          </div>
        </div>
        <p>
          Nowadays, groups like the Black Farmers Collective and Got Green continue to build upon this legacy by growing fresh,
          healthy produce and advocating for food justice in Seattle. The BIPOC urban gardening community is a vibrant and important part of
          Seattle's social and environmental fabric.
        </p>
        <div class="container">
          <div class="row">
            <div class="col-4 about-garden-col">
              <img class="about-garden-img img-responsive" src={black_farmers_collective_1} alt="Staff of Black Farmers Collective"/>
              <p className="about-garden-text">The Staff Team at Black Farmers Collective</p>
            </div>
            <div class="col-4 about-garden-col">
              <img class="about-garden-img img-responsive" src={black_farmers_collective_2} alt="Volunteers at Yes Farm"/>
              <p className="about-garden-text">Volunteers at Yes Farm</p>
            </div>
            <div class="col-4 about-garden-col">
              <img class="about-garden-img img-responsive" src={got_green_2008} alt="Staff at Got Green"/>
              <p className="about-garden-text">The Team at Got Green</p>
            </div>
          </div>
        </div>
      </div>
      <div className='section-header'>
        <h1>Why This Matters</h1>
      </div>
      <div className='section-body'>
        <p>Community-building is a crucial component of the BIPOC urban gardening movement in Seattle, and it plays an important role in
          promoting health and well-being for BIPOC folks. By fostering connections between individuals who may face food insecurity or
          systemic oppression, gardening can empower communities and create a sense of belonging. For BIPOC folks, who are disproportionately
          impacted by food insecurity and other health disparities, urban gardening can provide a source of fresh, healthy produce and a means
          of accessing culturally appropriate foods. Additionally, gardening has been shown to have mental health benefits, including reducing
          stress and promoting feelings of calm and relaxation.
        </p>
        <div class="container">
          <img class="about-garden-img bloom img-responsive" src={bloom_giving_garden} alt="BLOOM Giving Garden guide with volunteer farmers" />
          <p className="about-garden-text">At BLOOM Giving Garden, visitors are taught about the importance of food sovereignty in combatting inequality. BLOOM, along with other urban gardens, build community through their gardens and then give back to the community as well. (Photo by Davida Ingram)</p>
        </div>
    <p>
          GardenSpace recognizes the importance of community-building and is committed to providing spaces where new gardeners can get involved,
          feel supported, and make lifelong connections. Gardening has a long radical history of liberation, and GardenSpace aims to continue this
          tradition by creating access points for individuals to join the BIPOC urban gardening community in Seattle. Through community-building
          and support, GardenSpace hopes to empower individuals and promote a more just and equitable food system in the city. It is only through
          the support of our community that we may create a brighter future for us all!
    </p>
  </div>
        <div className='section-header-2'>
          <h3>Get in Touch with Us!</h3>
        </div>
        <div className='section-body-2'>
          <p>Feel free to contact us at gardenspacemuse@gmail.com for any questions or additional information.</p>
          <p>We look forward to chatting with you.</p>
        </div>
      <div className="resource">
        <div className="resource-title p-5 text-left text-black">
          <h2 id="banner-title-resource">Learn More About the History of Urban Gardening in Seattle</h2>
          <div>
            <Card />
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
              <div className='Niha-section' onClick={()=> window.open('https://www.linkedin.com/in/nihagaddam/', "_blank", "noreferrer")}>
                <img className='team-img' src={Niha} alt={"Niha"} />
                <div className='team-text'>
                  <h2>Niha Gaddam</h2>
                  <p>FRONTEND DEV</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='Efra-section' onClick={()=> window.open('https://www.linkedin.com/in/efra-ahsan-4b49a0228/', "_blank", "noreferrer")}>
                <img className='team-img' src={Efra} alt={"Efra"} />
                <div className='team-text'>
                  <h2>Efra Ahsan</h2>
                  <p>FULLSTACK DEV</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='Andrew-section' onClick={()=> window.open('https://www.linkedin.com/in/andrew-jia-ming-chen-64b47a1ba/', "_blank", "noreferrer")}>
                <img className='team-img' src={Andrew} alt={"Andrew"} />
                <div className='team-text'>
                  <h2>Andrew Chen</h2>
                  <p>FULLSTACK DEV</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='Easha-section' onClick={()=> window.open('https://www.linkedin.com/in/easha-dhillon/', "_blank", "noreferrer")}>
                <img className='team-img' src={Easha} alt={"Easha"} />
                <div className='team-text'>
                  <h2>Easha Dhillon</h2>
                  <p>UX DESIGNER</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='Pranav-section' onClick={()=> window.open('https://www.linkedin.com/in/pranav-shekar/', "_blank", "noreferrer")}>
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
      <div className='footer-break'>
      <p> </p>
      </div>
      <div className="contact">
        <h3 className="contact-title text-white">Contact Us!</h3>
        <p className="text-white">gardenspacemuse@gmail.com
        <br></br>
        University of Washington Capstone 2023
        <br></br>
        ©2023</p>
      </div>
    </div>
  );
}