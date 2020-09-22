import React from 'react';
import {
  StyledListing,
  StyledImageContainer,
  StyledDetails,
  StyledDescription
} from './Listing.styled';
import { StyledLink } from '../../styles';
import { formatNumber } from '../../util/functions';

export default function Listing({ listing }) {
  return (
    <StyledListing>
      <StyledImageContainer>
        {/* ternary for local db images that aren't on cloudinary */}
        <img
          src={
            listing.image.path.includes('images')
              ? `http://localhost:4000/${listing.image.path}`
              : listing.image.path
          }
          alt='Listing'
        />
      </StyledImageContainer>
      <StyledDetails>
        <StyledLink to={`/listings/${listing.id}`}>
          <h3>{listing.title}</h3>
        </StyledLink>
        <StyledDescription>{`${listing.description.substring(
          0,
          20
        )}...`}</StyledDescription>
        <p style={{ fontSize: '14px' }}>
          {listing.disposition === 'rent'
            ? `$${formatNumber(listing.price)}/mo`
            : `$${formatNumber(listing.price)}`}
        </p>
        <p>{listing.address1}</p>
        <p>{listing.city}</p>
      </StyledDetails>
    </StyledListing>
  );
}
