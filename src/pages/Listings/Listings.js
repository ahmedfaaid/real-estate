import React from 'react';
import { useQuery } from '@apollo/client';
import { LISTINGS } from '../../util/queries';
import Layout from '../../components/Layout';
import Listing from '../../components/Listing/Listing';
import { Loading } from '../../styles';
import { StyledListingsContainer, StyledListingLink } from './Listings.styled';

export default function Listings() {
  const { loading, error, data } = useQuery(LISTINGS);

  if (loading) {
    return (
      <Layout page='Listings'>
        <Loading />
      </Layout>
    );
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Layout page='Listings'>
      <h1 style={{ textAlign: 'center' }}>Listings</h1>
      <StyledListingsContainer>
        {data.listings.map(listing => (
          <StyledListingLink key={listing.id} to={`/listings/${listing.id}`}>
            <Listing listing={listing} />
          </StyledListingLink>
        ))}
      </StyledListingsContainer>
    </Layout>
  );
}
