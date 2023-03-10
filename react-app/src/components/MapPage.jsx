import React from 'react';
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";
import style from "./MapPage.css";
import map from '../imgs/map-image.png'

export default function MapPage(props) {
  return (
    <div>
      {/*<div className='container map-container'>*/}
        {/* <MapComponent isMarkerShown /> */}
      {/*</div>*/}
      <div className="row">
        <div className="col-md-9">
          <div className="map-image">
            <img src={map}/>
          </div>
        </div>
        <div className="col-md-3">
          <div className='map map-panel'>
            <div>
            {/*<div className='container'>*/}
              <input className='p-2 my-5' type="text" placeholder="Search.."/>
              <MapCardDeck />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Map Component is not working because of conflicting dependencies
function MapComponent(props) {
  return(
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} >
     { props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} /> }
    </GoogleMap>
  );
}

function MapCardDeck(props){
  return (
    <div>
      <MapCard title={'EastLake P-Patch'} address={'2900 Fairview Ave E'} telephone={'206-684-2489'} />
      <MapCard title={'Yes Farm'} address={'727 Yesler Way'} telephone={'206-256-7019'} />
      <MapCard title={'Queen Pea P-Patch'} address={'5th Ave N'} telephone={'206-684-2489'} />
    </div>
  );

  function MapCard(props) {
    return (
      <div className='card map-card'>
        <div className='d-flex'>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className='align-self-center m-3'>
            <path d="M24 23.5C24.9667 23.5 25.7917 23.1583 26.475 22.475C27.1583 21.7917 27.5 20.9667 27.5 20C27.5 19.0333 27.1583 18.2083 26.475 17.525C25.7917 16.8417 24.9667 16.5 24 16.5C23.0333 16.5 22.2083 16.8417 21.525 17.525C20.8417 18.2083 20.5 19.0333 20.5 20C20.5 20.9667 20.8417 21.7917 21.525 22.475C22.2083 23.1583 23.0333 23.5 24 23.5ZM24.05 43.4C23.8167 43.4 23.6 43.3667 23.4 43.3C23.2 43.2333 23.0167 43.1333 22.85 43C17.8833 38.6333 14.1667 34.5833 11.7 30.85C9.23333 27.1167 8 23.6333 8 20.4C8 15.4 9.60833 11.4167 12.825 8.45C16.0417 5.48333 19.7667 4 24 4C28.2333 4 31.9583 5.48333 35.175 8.45C38.3917 11.4167 40 15.4 40 20.4C40 23.6333 38.7667 27.1167 36.3 30.85C33.8333 34.5833 30.1167 38.6333 25.15 43C24.9833 43.1333 24.8083 43.2333 24.625 43.3C24.4417 43.3667 24.25 43.4 24.05 43.4Z" fill="#FF6720"/>
          </svg>
          <div className='mt-3 mr-5'>
            <h3>{ props.title }</h3>
            <p>{ props.address }</p>
            <p><a href={'tel:' + props.telephone}>{ props.telephone }</a></p>
          </div>
        </div>
      </div>
    );
  }
}