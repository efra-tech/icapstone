import React, { useRef, useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import "./MapPage.css";
import geoJson from "../data/seattle-farms-complete.json";
import markerImage from "../imgs/marker.png";


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

//Somehow route this to side panel
const Marker = ({ onClick, children, feature }) => {
    const _onClick = () => {
      onClick(feature.properties.description);
    };
  
    return (
      <button onClick={_onClick} className="marker">
        {children}
      </button>
    );
  };

const MapComponent = (props) => {
    const mapContainerRef = useRef(null);
  
    // Initialize map when component mounts
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: props.center[0],
        zoom: props.center[1],
      });
  
      map.on("load", function () {
        // Add an image to use as a custom marker
        map.loadImage(markerImage,
          function (error, image) {
            if (error) {
                throw error;
            }
            map.addImage("custom-marker", image);

            //json file here
            map.addSource("points", {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: geoJson.features,
              },
            });
            
            // Add a symbol layer
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
  
      // Add navigation control (the +/- zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), "top-right");
  
      // Clean up on unmount
      return () => map.remove();
    }, []);
  
    return <div className="map-container" ref={mapContainerRef} />;
  };
  
  export default MapComponent;


  // Old Map Component
//   export default function MapPage(props) {
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(-122.330062);
//     const [lat, setLat] = useState(47.6038321);
//     const [zoom, setZoom] = useState(12);

//     useEffect(() => {
//         if (map.current) {
//             return;
//         }
//         map.current = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/mapbox/streets-v12',
//             center: [lng, lat],
//             zoom: zoom
//         });
//     });