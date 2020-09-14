import React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { StyledMarker, StyledPopup } from './Map.styled';
import { StyledLink } from '../../styles';
import { formatNumber } from '../../util/functions';
import { Link } from 'react-router-dom';

function Map({ listings }) {
  const [viewport, setViewport] = useState({
    latitude: 43.653226,
    longitude: -79.3831843,
    zoom: 10
  });

  const [selectedListing, setSelectedListing] = useState(null);

  return (
    <ReactMapGL
      {...viewport}
      width='100vw'
      height='100%'
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      style={{ position: 'relative' }}
    >
      <div
        style={{
          position: 'absolute',
          right: '10px',
          bottom: '40px'
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
          closeOnClick={false}
          captureClick={false}
        >
          <StyledPopup>
            <Link to={`/listings/${selectedListing.id}`}>
              <img
                src={`http://localhost:4000/${selectedListing.image.path}`}
                alt='Listing'
                style={{ width: '100%' }}
              />
            </Link>
            <div>
              <StyledLink to={`/listings/${selectedListing.id}`}>
                <h3>{selectedListing.title}</h3>
              </StyledLink>
              <h4>{selectedListing.description.substring(0, 20)}</h4>
              <p>{selectedListing.address1}</p>
              {selectedListing.address2 && <p>{selectedListing.address2}</p>}
              <p>{selectedListing.city}</p>
              <p>
                {selectedListing.disposition === 'rent'
                  ? `$${formatNumber(selectedListing.price)}/mo`
                  : `$${formatNumber(selectedListing.price)}`}
              </p>
            </div>
          </StyledPopup>
        </Popup>
      )}
    </ReactMapGL>
  );
}

export default Map;
