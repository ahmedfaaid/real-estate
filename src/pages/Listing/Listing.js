import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LISTING } from '../../util/queries';
import Layout from '../../components/Layout';
import {
  StyledImageContainer,
  StyledAddressCard,
  StyledSeparator
} from './Listing.styled';

export default function Listing() {
  const { listingId } = useParams();

  const { loading, error, data } = useQuery(LISTING, {
    variables: { id: listingId }
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const {
    title,
    address1,
    address2,
    city,
    province,
    postalCode,
    description
  } = data.listing;

  return (
    <Layout>
      <StyledImageContainer>
        <img src='https://dummyimage.com/600x400/000/fff' alt='Listing' />
      </StyledImageContainer>
      <StyledAddressCard>
        <h1 style={{ fontSize: '16px' }}>{title}</h1>
        <p style={{ fontSize: '14px' }}>{description}</p>
        <StyledSeparator />
        <p style={{ fontSize: '14px' }}>{address1}</p>
        <p style={{ fontSize: '14px' }}>{address2}</p>
        <p style={{ fontSize: '14px' }}>{city}</p>
        <p style={{ fontSize: '14px' }}>{province}</p>
        <p style={{ fontSize: '14px' }}>{postalCode}</p>
      </StyledAddressCard>
    </Layout>
  );
}
