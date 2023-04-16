import React, { useRef, useEffect, useState } from 'react';
import style from "./MapPage.css";
// import mapImage from '../imgs/map-image.png';
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import markerImage from "../imgs/marker.png"
import geoJson from "../data/seattle-farms-complete.json";
import ActualMapComponent from './ActualMapComponent';

export default function MapPage(props) {
  const [center, setCenter] = useState([[-122.330062, 47.6038321], 12.5])
  const [mapRefresh, setMapRefresh] = React.useState(0);

  return (
    <div>
      <div className="row">
        <div className="col-9">
          <div>
            <ActualMapComponent center={center} key={mapRefresh} />
          </div>
        </div>
        <div className="col-3">
          <div className='map map-panel'>
            <div>
              <input className='p-2 m-5' type="text" placeholder="Search..." onChange={event => {props.setSearch(event.target.value)}}/>
              {!props.showCard && <MapCardDeck setCard={props.setCard} setGarden={props.setGarden} searchTerm={props.searchTerm} setCenter={setCenter} setMapRefresh={setMapRefresh} />}
              {props.showCard && <DetailedCard setCard={props.setCard} setGarden={props.setGarden} gardenID={props.gardenID} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Map Component is not working because of conflicting dependencies
function MapComponent(props) {
  // const mapContainerRef = useRef(null);
  
  //   // Initialize map when component mounts
  //   useEffect(() => {
  //     const map = new mapboxgl.Map({
  //       container: mapContainerRef.current,
  //       style: "mapbox://styles/mapbox/streets-v11",
  //       center: [-87.65, 41.84],
  //       zoom: 10,
  //     });
  
  //     map.on("load", function () {
  //       // Add an image to use as a custom marker
  //       map.loadImage(
  //         "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
  //         function (error, image) {
  //           if (error) throw error;
  //           map.addImage("custom-marker", image);
  //           // Add a GeoJSON source with multiple points
  //           map.addSource("points", {
  //             type: "geojson",
  //             data: {
  //               type: "FeatureCollection",
  //               features: geoJson.features,
  //             },
  //           });
  //           // Add a symbol layer
  //           map.addLayer({
  //             id: "points",
  //             type: "symbol",
  //             source: "points",
  //             layout: {
  //               "icon-image": "custom-marker",
  //               // get the title name from the source's "title" property
  //               "text-field": ["get", "title"],
  //               "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
  //               "text-offset": [0, 1.25],
  //               "text-anchor": "top",
  //             },
  //           });
  //         }
  //       );
  //     });
  
  //     // Add navigation control (the +/- zoom buttons)
  //     map.addControl(new mapboxgl.NavigationControl(), "top-right");
  
  //     // Clean up on unmount
  //     return () => map.remove();
  //   }, []);
  
  //   return (
  //     <div className="map-container" ref={mapContainerRef} />
  //   )
  };

function MapCardDeck(props){
  return (
    <div className="sidebar2">
      {geoJson.features.filter((garden) => {
        if (props.searchTerm == "") {
          return garden
        } else if (garden.properties["Urban Garden Name"].toLowerCase().includes(props.searchTerm.toLowerCase())) {
          return garden
        }
      }).map((garden) => {
        return (
          <div role="button" onClick={() => {props.setCard(true); props.setGarden(garden.properties["ID"]); props.setCenter([garden.geometry["coordinates"], 15]); props.setMapRefresh(key => key + 1)}}>
            <MapCard key={garden.properties["ID"]}
            title={garden.properties["Urban Garden Name"]}
            address={garden.properties["Street Address"]}
            telephone={garden.properties["Phone"]} />
          </div>
        );
      })}
    </div>
    // <div>
    //   <MapCard title={'EastLake P-Patch'} address={'2900 Fairview Ave E'} telephone={'206-684-2489'} />
    //   <MapCard title={'Yes Farm'} address={'727 Yesler Way'} telephone={'206-256-7019'} />
    //   <MapCard title={'Queen Pea P-Patch'} address={'5th Ave N'} telephone={'206-684-2489'} />
    // </div>
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
    )
  }
}
function DetailedCard(props) {

  let garden = geoJson.features[props.gardenID - 1]
  function printIfExists(input) {
    if (garden.properties[input] != 0 || garden.properties[input] != "") {
      if (input == "Garden Website" || input == "Affiliated Community Contact") {
        return <p><strong>{input}:</strong> <a href={garden.properties[input]}>{ garden.properties[input] } </a></p>
      } else if (input == "BIPOC-Owned" || input == "Accessible") {
          return <h4>{input}</h4>
      } else {
        return <p><strong>{input}:</strong> {garden.properties[input]}</p>
      }
    }
  }

  return (
    <div className='card map-card'>
      <div className='d-flex'>
        <button className="back-button" onClick={() => {props.setCard(false); props.setGarden(0)}}><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" height="35"/></button>
        <div className='detailed-card text-wrap mt-3 mr-5'>
          <div className='card-head'><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className='align-self-center m-3'>
            <path d="M24 23.5C24.9667 23.5 25.7917 23.1583 26.475 22.475C27.1583 21.7917 27.5 20.9667 27.5 20C27.5 19.0333 27.1583 18.2083 26.475 17.525C25.7917 16.8417 24.9667 16.5 24 16.5C23.0333 16.5 22.2083 16.8417 21.525 17.525C20.8417 18.2083 20.5 19.0333 20.5 20C20.5 20.9667 20.8417 21.7917 21.525 22.475C22.2083 23.1583 23.0333 23.5 24 23.5ZM24.05 43.4C23.8167 43.4 23.6 43.3667 23.4 43.3C23.2 43.2333 23.0167 43.1333 22.85 43C17.8833 38.6333 14.1667 34.5833 11.7 30.85C9.23333 27.1167 8 23.6333 8 20.4C8 15.4 9.60833 11.4167 12.825 8.45C16.0417 5.48333 19.7667 4 24 4C28.2333 4 31.9583 5.48333 35.175 8.45C38.3917 11.4167 40 15.4 40 20.4C40 23.6333 38.7667 27.1167 36.3 30.85C33.8333 34.5833 30.1167 38.6333 25.15 43C24.9833 43.1333 24.8083 43.2333 24.625 43.3C24.4417 43.3667 24.25 43.4 24.05 43.4Z" fill="#FF6720"/>
          </svg>
          <h3>{garden.properties["Urban Garden Name"]}</h3></div>
          <p>{garden.properties["Street Address"]}</p>
          <p><a href={'tel:' + garden.properties["Phone"]}>{ garden.properties["Phone"] }</a></p>
          {printIfExists("Email")}
          {printIfExists("Garden Website")}
          {printIfExists("Affiliated Community Contact")}
          {printIfExists("Plot Size (sq ft)")}
          {printIfExists("No. Plots")}
          {printIfExists("BIPOC-Owned")}
          {printIfExists("Accessible")}
        </div>
      </div>
    </div>
  )
}