import React, { useRef, useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import "./MapPage.css";
import geoJson from "../data/seattle-farms-complete.json";
import markerImage from "../imgs/marker.png";


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MapComponent = (props) => {
    const mapContainerRef = useRef(null);
  
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: props.center[0],
        zoom: props.center[1],
      });
  
      map.on("load", function () {
        // Add images as markers
        map.loadImage(markerImage,
          function (error, image) {
            if (error) {
                throw error;
            }
            map.addImage("custom-marker", image);

            // Load JSON file
            map.addSource("points", {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: geoJson.features,
              },
            });
            
            // Layer for markers
            map.addLayer({
              id: "points",
              type: "symbol",
              source: "points",
              layout: {
                "icon-image": "custom-marker",
                // get the title name from the source's "title" property
                "text-field": ["get", "Urban Garden Name"],
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 1.6],
                "text-anchor": "top",
              },
            });
          }
        );
      });
  
      // Add map control
      map.addControl(new mapboxgl.NavigationControl(), "top-right");

      return () => map.remove();
    }, []);
  
    return <div className="map-container" ref={mapContainerRef} />;
  };
  
  export default MapComponent;