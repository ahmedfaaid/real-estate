import React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

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
    />
  );
}

export default Map;
