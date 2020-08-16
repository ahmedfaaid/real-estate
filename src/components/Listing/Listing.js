import React from 'react';
import {
  StyledListing,
  StyledImageContainer,
  StyledLink,
  StyledDetails,
  StyledDescription,
} from './Listing.styled';

export default function Listing({ listing }) {
  return (
    <StyledListing>
      <StyledImageContainer>
        <img src='https://dummyimage.com/200x150/000/fff' alt='Listing' />
      </StyledImageContainer>
      <StyledDetails>
        <StyledLink to={`/${listing.id}`}>
          <h3>{listing.title}</h3>
        </StyledLink>
        <StyledDescription>{`${listing.description.substring(
          0,
          20
        )}...`}</StyledDescription>
        <p>{listing.address1}</p>
        <p>{listing.city}</p>
      </StyledDetails>
    </StyledListing>
  );
}