import React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import locations from '../../data';

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 43.653226,
    longitude: -79.3831843,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      width='100vw'
      height='100vh'
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      style={{ position: 'relative' }}
    >
      {locations.map(location => (
        <Marker
          key={location.phone}
          latitude={location.lat}
          longitude={location.lng}
        >
          <button>
            <img src='../../canada.svg' alt='Marker' />
          </button>
        </Marker>
      ))}
    </ReactMapGL>
  );
}

export default Map;
