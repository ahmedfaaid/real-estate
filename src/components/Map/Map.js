import React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { StyledMarker, StyledPopup } from './Map.styled';

function Map({ listings }) {
  const [viewport, setViewport] = useState({
    latitude: 43.653226,
    longitude: -79.3831843,
    zoom: 12,
  });

  const [selectedListing, setSelectedListing] = useState(null);

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
      {listings.map(listing => (
        <Marker
          key={listing.id}
          latitude={listing.latitude}
          longitude={listing.longitude}
        >
          <StyledMarker
            onClick={e => {
              e.preventDefault();
              setSelectedListing(listing);
            }}
          >
            <FontAwesomeIcon icon={faMapMarker} />
          </StyledMarker>
        </Marker>
      ))}
      {selectedListing && (
        <Popup
          latitude={selectedListing.latitude}
          longitude={selectedListing.longitude}
          onClose={() => {
            setSelectedListing(null);
          }}
        >
          <StyledPopup>
            <h3>{selectedListing.title}</h3>
            <h4>{selectedListing.description.substring(0, 20)}</h4>
            <p>{selectedListing.address1}</p>
            {selectedListing.address2 && <p>{selectedListing.address2}</p>}
            <p>{selectedListing.city}</p>
          </StyledPopup>
        </Popup>
      )}
    </ReactMapGL>
  );
}

export default Map;
