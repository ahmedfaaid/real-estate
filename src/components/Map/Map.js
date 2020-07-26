import React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { StyledMarker, StyledPopup } from './Map.styled';
import locations from '../../data';

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 43.653226,
    longitude: -79.3831843,
    zoom: 12,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <ReactMapGL
      {...viewport}
      width='100vw'
      height='92vh'
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      style={{ position: 'relative' }}
    >
      <div
        style={{
          position: 'absolute',
          right: '10px',
          bottom: '10px',
        }}
      >
        <NavigationControl showCompass={false} />
      </div>
      {locations.map(location => (
        <Marker
          key={location.address}
          latitude={location.lat}
          longitude={location.lng}
        >
          <StyledMarker
            onClick={e => {
              e.preventDefault();
              setSelectedLocation(location);
            }}
          >
            <FontAwesomeIcon icon={faMapMarker} />
          </StyledMarker>
        </Marker>
      ))}
      {selectedLocation && (
        <Popup
          latitude={selectedLocation.lat}
          longitude={selectedLocation.lng}
          onClose={() => {
            setSelectedLocation(null);
          }}
        >
          <StyledPopup>
            <h3>{selectedLocation.agency}</h3>
            <h4>{selectedLocation.program}</h4>
            <p>{selectedLocation.address}</p>
            <p>{selectedLocation.phone}</p>
          </StyledPopup>
        </Popup>
      )}
    </ReactMapGL>
  );
}

export default Map;
